export type OmitId<T extends { id: number }> = Omit<T, "id">;
