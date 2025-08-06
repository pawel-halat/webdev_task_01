export interface ApiError {
  response?: {
    status: number;
    data: { message?: string };
  };
  request?: unknown;
  message: string;
}
