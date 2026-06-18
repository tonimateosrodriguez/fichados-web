// scripts/generate-recursos.mjs
// Genera la PLANTILLA DE HORARIO SEMANAL branded de Fichados como .xlsx.
//
// Uso:  node scripts/generate-recursos.mjs
//       npm run generate:recursos
//
// Salida: public/recursos/plantilla-horario-semanal-fichados.xlsx
//
// Diseño: cabecera con logo embebido, cuadrícula Empleado + Lun..Dom + Total,
// columnas auxiliares de horas numéricas por día para que la fórmula =SUM()
// del total semanal por empleado CALCULE de verdad. Segunda hoja con
// instrucciones y el matiz legal del RDL 8/2019.

import ExcelJS from "exceljs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { existsSync, mkdirSync } from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..");

// ---------------------------------------------------------------------------
// Paleta de marca Fichados
// ---------------------------------------------------------------------------
const COLOR = {
  primary: "FF3B82F6", // azul primario #3B82F6
  text: "FF23282F", // texto principal #23282F
  bg: "FFFAFAF6", // fondo claro #FAFAF6
  rowAlt: "FFF0F5FA", // filas alternas #F0F5FA
  border: "FFE2E8F0", // bordes #E2E8F0
  white: "FFFFFFFF",
  muted: "FF64748B", // gris para subtítulos / notas
};

const FONT = "Calibri";

const LOGO_PATH = resolve(ROOT, "public/images/fichados-logo.png");
const OUT_DIR = resolve(ROOT, "public/recursos");
const OUT_PATH = resolve(OUT_DIR, "plantilla-horario-semanal-fichados.xlsx");

const DAYS = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];
const EMPLOYEE_ROWS = 8;

// Bordes finos reutilizables
const thin = { style: "thin", color: { argb: COLOR.border } };
const allThinBorders = { top: thin, left: thin, bottom: thin, right: thin };

function applyBorders(cell) {
  cell.border = allThinBorders;
}

// ---------------------------------------------------------------------------
// Construcción del workbook
// ---------------------------------------------------------------------------
async function build() {
  const wb = new ExcelJS.Workbook();
  wb.creator = "Fichados";
  wb.lastModifiedBy = "Fichados";
  wb.created = new Date();
  wb.modified = new Date();
  wb.title = "Plantilla de horario semanal - Fichados";
  wb.subject = "Plantilla de horario semanal";
  wb.company = "Fichados";
  wb.keywords = "horario, jornada, registro, Fichados, RDL 8/2019";

  buildScheduleSheet(wb);
  buildInstructionsSheet(wb);

  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });
  await wb.xlsx.writeFile(OUT_PATH);
}

// ---------------------------------------------------------------------------
// HOJA 1 — Horario semanal
// ---------------------------------------------------------------------------
function buildScheduleSheet(wb) {
  const ws = wb.addWorksheet("Horario semanal", {
    properties: { defaultRowHeight: 18, tabColor: { argb: COLOR.primary } },
    pageSetup: {
      orientation: "landscape",
      fitToPage: true,
      fitToWidth: 1,
      fitToHeight: 0,
      margins: {
        left: 0.4,
        right: 0.4,
        top: 0.5,
        bottom: 0.5,
        header: 0.3,
        footer: 0.3,
      },
    },
    views: [{ showGridLines: false }],
  });

  // Fondo claro de la hoja: lo logramos pintando un rango amplio de celdas
  // de cabecera; el resto queda blanco/limpio. Mantenemos la hoja sobria.

  // --- Columnas ---
  // A: Empleado | B..H: Lun..Dom (texto rango "09:00-17:00")
  // I: Total horas (fórmula) | K..Q: columnas auxiliares de horas numéricas
  const TEXT_DAY_COLS = [2, 3, 4, 5, 6, 7, 8]; // B..H
  const TOTAL_COL = 9; // I
  const AUX_START_COL = 11; // K (dejamos J=10 vacía como separador)
  const AUX_COLS = DAYS.map((_, i) => AUX_START_COL + i); // K..Q

  ws.getColumn(1).width = 26; // Empleado
  TEXT_DAY_COLS.forEach((c) => (ws.getColumn(c).width = 14));
  ws.getColumn(TOTAL_COL).width = 13; // Total horas
  ws.getColumn(10).width = 3; // separador J
  AUX_COLS.forEach((c) => (ws.getColumn(c).width = 11));

  // --- Cabecera con logo + títulos (filas 1-4) ---
  // Reservamos altura para el logo embebido.
  ws.getRow(1).height = 26;
  ws.getRow(2).height = 26;
  ws.getRow(3).height = 18;
  ws.getRow(4).height = 8;

  // Logo embebido
  try {
    const imageId = wb.addImage({ filename: LOGO_PATH, extension: "png" });
    // Logo 719x155 -> aspect ~4.639:1. Ancho objetivo ~220px -> alto ~47px.
    ws.addImage(imageId, {
      tl: { col: 0.15, row: 0.2 },
      ext: { width: 220, height: 47 },
      editAs: "oneCell",
    });
  } catch (err) {
    // Si el logo no estuviera disponible, no rompemos la generación.
    console.warn("Aviso: no se pudo embeber el logo:", err.message);
  }

  // Título y subtítulo (a la derecha del logo, no se solapan)
  const titleCell = ws.getCell("C1");
  titleCell.value = "Horario semanal";
  titleCell.font = { name: FONT, size: 18, bold: true, color: { argb: COLOR.text } };
  titleCell.alignment = { vertical: "middle", horizontal: "left" };
  ws.mergeCells("C1:H1");

  const subtitleCell = ws.getCell("C2");
  subtitleCell.value = "Fichados · fichados.es";
  subtitleCell.font = { name: FONT, size: 11, color: { argb: COLOR.primary }, bold: true };
  subtitleCell.alignment = { vertical: "middle", horizontal: "left" };
  ws.mergeCells("C2:H2");

  // --- Fila de cabeceras de la tabla (fila 5) ---
  const HEADER_ROW = 5;
  const headerLabels = ["Empleado", ...DAYS, "Total horas"];
  const headerCols = [1, ...TEXT_DAY_COLS, TOTAL_COL];

  headerLabels.forEach((label, idx) => {
    const cell = ws.getCell(HEADER_ROW, headerCols[idx]);
    cell.value = label;
    cell.font = { name: FONT, size: 11, bold: true, color: { argb: COLOR.white } };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: COLOR.primary },
    };
    cell.alignment = { vertical: "middle", horizontal: "center", wrapText: true };
    applyBorders(cell);
  });
  ws.getRow(HEADER_ROW).height = 22;

  // Cabeceras auxiliares (horas numéricas por día) — sección de apoyo
  const auxTitle = ws.getCell(HEADER_ROW, AUX_START_COL);
  // Etiqueta de bloque auxiliar encima
  const auxLabelRow = ws.getCell(4, AUX_START_COL);
  auxLabelRow.value = "Horas por día (numérico, para el cálculo)";
  auxLabelRow.font = { name: FONT, size: 9, italic: true, color: { argb: COLOR.muted } };
  auxLabelRow.alignment = { vertical: "middle", horizontal: "left" };
  ws.mergeCells(4, AUX_START_COL, 4, AUX_START_COL + DAYS.length - 1);

  DAYS.forEach((day, i) => {
    const cell = ws.getCell(HEADER_ROW, AUX_COLS[i]);
    cell.value = day.slice(0, 3); // Lun, Mar, ...
    cell.font = { name: FONT, size: 10, bold: true, color: { argb: COLOR.text } };
    cell.fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: COLOR.rowAlt },
    };
    cell.alignment = { vertical: "middle", horizontal: "center" };
    applyBorders(cell);
  });
  void auxTitle;

  // --- Filas de empleados (vacías para rellenar) ---
  const FIRST_DATA_ROW = HEADER_ROW + 1; // 6
  const LAST_DATA_ROW = FIRST_DATA_ROW + EMPLOYEE_ROWS - 1; // 13

  const sampleNames = [
    "Empleado/a 1",
    "Empleado/a 2",
    "Empleado/a 3",
    "Empleado/a 4",
    "Empleado/a 5",
    "Empleado/a 6",
    "Empleado/a 7",
    "Empleado/a 8",
  ];

  for (let r = FIRST_DATA_ROW; r <= LAST_DATA_ROW; r++) {
    const idx = r - FIRST_DATA_ROW;
    const isAlt = idx % 2 === 1;
    const rowFill = isAlt ? COLOR.rowAlt : COLOR.white;
    ws.getRow(r).height = 20;

    // Empleado (texto de ejemplo, listo para sobrescribir)
    const nameCell = ws.getCell(r, 1);
    nameCell.value = sampleNames[idx] ?? "";
    nameCell.font = { name: FONT, size: 11, color: { argb: COLOR.text } };
    nameCell.alignment = { vertical: "middle", horizontal: "left", indent: 1 };
    nameCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowFill } };
    applyBorders(nameCell);

    // Días (texto tipo "09:00-17:00") — vacíos para rellenar
    TEXT_DAY_COLS.forEach((c) => {
      const cell = ws.getCell(r, c);
      cell.value = "";
      cell.font = { name: FONT, size: 11, color: { argb: COLOR.text } };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowFill } };
      applyBorders(cell);
    });

    // Total horas (FÓRMULA real: suma de las columnas auxiliares K..Q de la fila)
    const auxFirst = ws.getCell(r, AUX_COLS[0]).address; // p.ej. K6
    const auxLast = ws.getCell(r, AUX_COLS[AUX_COLS.length - 1]).address; // Q6
    const totalCell = ws.getCell(r, TOTAL_COL);
    totalCell.value = { formula: `SUM(${auxFirst}:${auxLast})` };
    totalCell.numFmt = "0.0";
    totalCell.font = { name: FONT, size: 11, bold: true, color: { argb: COLOR.text } };
    totalCell.alignment = { vertical: "middle", horizontal: "center" };
    totalCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowFill } };
    applyBorders(totalCell);

    // Columnas auxiliares de horas (numéricas). Damos valores de ejemplo en
    // las dos primeras filas para que la fórmula se vea calcular; el resto a 0.
    AUX_COLS.forEach((c, dayIdx) => {
      const cell = ws.getCell(r, c);
      let val = 0;
      if (idx === 0 && dayIdx < 5) val = 8; // Empleado 1: L-V 8h
      else if (idx === 1 && dayIdx < 5) val = 7; // Empleado 2: L-V 7h
      cell.value = val;
      cell.numFmt = "0.0";
      cell.font = { name: FONT, size: 10, color: { argb: COLOR.muted } };
      cell.alignment = { vertical: "middle", horizontal: "center" };
      cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: rowFill } };
      applyBorders(cell);
    });
  }

  // --- Fila de totales (suma por columna) ---
  const TOTALS_ROW = LAST_DATA_ROW + 1; // 14
  ws.getRow(TOTALS_ROW).height = 22;

  const totalsLabel = ws.getCell(TOTALS_ROW, 1);
  totalsLabel.value = "TOTAL";
  totalsLabel.font = { name: FONT, size: 11, bold: true, color: { argb: COLOR.white } };
  totalsLabel.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLOR.primary } };
  totalsLabel.alignment = { vertical: "middle", horizontal: "left", indent: 1 };
  applyBorders(totalsLabel);

  // Totales por día (texto): no sumamos texto, dejamos guía visual vacía con fondo.
  TEXT_DAY_COLS.forEach((c) => {
    const cell = ws.getCell(TOTALS_ROW, c);
    cell.value = "";
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLOR.rowAlt } };
    applyBorders(cell);
  });

  // Total general (suma de la columna Total horas)
  const grandTotalCell = ws.getCell(TOTALS_ROW, TOTAL_COL);
  const firstTotalAddr = ws.getCell(FIRST_DATA_ROW, TOTAL_COL).address; // I6
  const lastTotalAddr = ws.getCell(LAST_DATA_ROW, TOTAL_COL).address; // I13
  grandTotalCell.value = { formula: `SUM(${firstTotalAddr}:${lastTotalAddr})` };
  grandTotalCell.numFmt = "0.0";
  grandTotalCell.font = { name: FONT, size: 12, bold: true, color: { argb: COLOR.primary } };
  grandTotalCell.alignment = { vertical: "middle", horizontal: "center" };
  grandTotalCell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLOR.bg } };
  applyBorders(grandTotalCell);

  // Totales por día en el bloque auxiliar (suma de cada columna numérica)
  AUX_COLS.forEach((c) => {
    const first = ws.getCell(FIRST_DATA_ROW, c).address;
    const last = ws.getCell(LAST_DATA_ROW, c).address;
    const cell = ws.getCell(TOTALS_ROW, c);
    cell.value = { formula: `SUM(${first}:${last})` };
    cell.numFmt = "0.0";
    cell.font = { name: FONT, size: 10, bold: true, color: { argb: COLOR.text } };
    cell.alignment = { vertical: "middle", horizontal: "center" };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLOR.rowAlt } };
    applyBorders(cell);
  });

  // --- Nota al pie ---
  const NOTE_ROW = TOTALS_ROW + 2; // 16
  const note = ws.getCell(NOTE_ROW, 1);
  note.value =
    "Rellena los rangos horarios (p. ej. 09:00-17:00) y las horas por día en el bloque numérico. El total semanal se calcula solo.";
  note.font = { name: FONT, size: 9, italic: true, color: { argb: COLOR.muted } };
  note.alignment = { vertical: "middle", horizontal: "left", wrapText: true };
  ws.mergeCells(NOTE_ROW, 1, NOTE_ROW, TOTAL_COL);
  ws.getRow(NOTE_ROW).height = 28;

  // --- Vistas: congelar primera fila de datos y primera columna ---
  // Congelamos por encima de la fila de cabecera de tabla (fila 5) y a la
  // derecha de la columna Empleado (columna A).
  ws.views = [
    {
      state: "frozen",
      xSplit: 1, // congela columna A (Empleado)
      ySplit: HEADER_ROW, // congela hasta la fila de cabeceras
      topLeftCell: `B${HEADER_ROW + 1}`,
      activeCell: "B6",
      showGridLines: false,
    },
  ];

  // --- Área de impresión: tabla principal A1:I(TOTALS_ROW) ---
  ws.pageSetup.printArea = `A1:I${TOTALS_ROW}`;
  ws.pageSetup.printTitlesRow = `${HEADER_ROW}:${HEADER_ROW}`;
}

// ---------------------------------------------------------------------------
// HOJA 2 — Instrucciones
// ---------------------------------------------------------------------------
function buildInstructionsSheet(wb) {
  const ws = wb.addWorksheet("Instrucciones", {
    properties: { tabColor: { argb: COLOR.muted } },
    views: [{ showGridLines: false }],
  });

  ws.getColumn(1).width = 4;
  ws.getColumn(2).width = 100;

  let r = 2;
  const title = ws.getCell(r, 2);
  title.value = "Cómo usar esta plantilla";
  title.font = { name: FONT, size: 16, bold: true, color: { argb: COLOR.text } };
  ws.getRow(r).height = 26;
  r += 1;

  const sub = ws.getCell(r, 2);
  sub.value = "Fichados · fichados.es";
  sub.font = { name: FONT, size: 11, bold: true, color: { argb: COLOR.primary } };
  r += 2;

  const steps = [
    'En la hoja "Horario semanal", escribe el nombre de cada empleado en la columna "Empleado".',
    'Anota el horario previsto de cada día como un rango, por ejemplo "09:00-17:00". Si hay pausa, puedes indicar dos tramos: "09:00-13:00 / 15:00-19:00".',
    'En el bloque numérico de la derecha ("Horas por día"), introduce las horas trabajadas de cada día como número (por ejemplo 8 o 7,5).',
    'La columna "Total horas" suma automáticamente las horas del bloque numérico de cada empleado: no tienes que calcular nada.',
    "La fila TOTAL suma las horas de toda la plantilla y el total de cada día.",
    "Duplica filas si tienes más de 8 empleados; arrastra la fórmula de la columna Total horas hacia abajo.",
    "Para imprimir: el área ya está configurada en horizontal y ajustada a 1 página de ancho (Archivo › Imprimir).",
  ];

  steps.forEach((text, i) => {
    const numCell = ws.getCell(r, 1);
    numCell.value = i + 1;
    numCell.font = { name: FONT, size: 11, bold: true, color: { argb: COLOR.primary } };
    numCell.alignment = { vertical: "top", horizontal: "center" };

    const cell = ws.getCell(r, 2);
    cell.value = text;
    cell.font = { name: FONT, size: 11, color: { argb: COLOR.text } };
    cell.alignment = { vertical: "top", horizontal: "left", wrapText: true };
    ws.getRow(r).height = 30;
    r += 1;
  });

  r += 1;

  // Nota legal destacada
  const legalTitle = ws.getCell(r, 2);
  legalTitle.value = "Nota importante (registro de jornada)";
  legalTitle.font = { name: FONT, size: 12, bold: true, color: { argb: COLOR.text } };
  ws.getRow(r).height = 22;
  r += 1;

  const legal = ws.getCell(r, 2);
  legal.value =
    "Esta plantilla planifica el horario previsto; el registro de jornada real (RDL 8/2019) debe guardar las horas efectivamente trabajadas — automatízalo con Fichados (app.fichados.es).";
  legal.font = { name: FONT, size: 11, color: { argb: COLOR.text } };
  legal.alignment = { vertical: "top", horizontal: "left", wrapText: true };
  legal.fill = { type: "pattern", pattern: "solid", fgColor: { argb: COLOR.rowAlt } };
  legal.border = allThinBorders;
  ws.mergeCells(r, 2, r + 2, 2);
  ws.getRow(r).height = 22;
  ws.getRow(r + 1).height = 22;
  ws.getRow(r + 2).height = 8;
  r += 4;

  const matiz = ws.getCell(r, 2);
  matiz.value =
    "El registro de jornada es obligatorio en España desde 2019 (art. 34.9 ET). Llevarlo en formato digital es muy recomendable (y hay una reforma en tramitación que lo haría obligatorio): el papel sigue siendo legal hoy, pero es frágil ante una inspección.";
  matiz.font = { name: FONT, size: 10, italic: true, color: { argb: COLOR.muted } };
  matiz.alignment = { vertical: "top", horizontal: "left", wrapText: true };
  ws.mergeCells(r, 2, r + 1, 2);
  ws.getRow(r).height = 22;
  ws.getRow(r + 1).height = 22;
}

// ---------------------------------------------------------------------------
build()
  .then(() => {
    console.log(`OK: generado ${OUT_PATH}`);
  })
  .catch((err) => {
    console.error("ERROR generando la plantilla:", err);
    process.exitCode = 1;
  });
