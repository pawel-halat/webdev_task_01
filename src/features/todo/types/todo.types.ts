export interface Todo {
  id?: number;
  title: string;
  description: string;
  status: "Abgeschlossen" | "In Planung";
  author: string;
  road_fid: number;
}
