declare const GRID_DIMENSION = 32;
declare const CHALK_WHITE = "#FBF7F5";
declare let mouseDown: boolean;
declare function toggleMouseDown(): void;
declare const grid: HTMLElement | null;
declare function initGrid(): void;
declare function colorGridItem(e: Event): void;
