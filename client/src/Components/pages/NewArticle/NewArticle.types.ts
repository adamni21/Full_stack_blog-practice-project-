export interface articleForm {
  title: string,
  content: string,
  author_name: string,
};

export type MODAL_MODE = "PREVIEW" | "CONFIRM" | "NONE";

export type ACTIONS =
  | { type: "UPDATE"; payload: { fieldName: string; value: string } }
  | { type: "RESET" };
