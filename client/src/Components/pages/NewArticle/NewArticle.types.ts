export interface article {
  title: string,
  content: string,
  author_name: string,
};

export type PORTAL_STATE = "CLOSED" | "CONFIRM_UPLOAD" | "ARTICLE_PREVIEW"

export type REDUCER_ACTIONS =
  | { type: "UPDATE"; payload: { fieldName: string; value: string } }
  | { type: "RESET" };
