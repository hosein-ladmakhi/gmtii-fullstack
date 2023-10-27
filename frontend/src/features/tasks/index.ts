import { TTasks } from "../../types";
import { api } from "../baseApi";

const tasksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    fetchTasks: builder.query<TTasks, void>({
      query: () => `/tasks`,
      providesTags: ["tasks"],
      transformResponse: (tasks: TTasks): TTasks => {
        return tasks.filter((t) => t.id);
      },
    }),
    createTask: builder.mutation({
      query: (body: any) => ({
        url: `/tasks`,
        body,
        method: "POST",
      }),
      invalidatesTags: ["tasks"],
    }),

    editTask: builder.mutation({
      query: ({ id, ...body }) => ({
        method: "PATCH",
        url: `/tasks/${id}`,
        body,
      }),
      invalidatesTags: ["tasks"],
    }),
    deleteTask: builder.mutation({
      query: (id: any) => ({
        method: "DELETE",
        url: `/tasks/${id}`,
      }),
      invalidatesTags: ["tasks"],
    }),
  }),
});

const { useDeleteTaskMutation, useFetchTasksQuery, useEditTaskMutation, useCreateTaskMutation } =
  tasksApi;

const useSingleTaskQuery = (id: number) => {
  const { data, ...state } = useFetchTasksQuery();
  if (state.isLoading || state.isError) return { ...state, data: {} as any };
  return { ...state, data: data?.find((d) => d.id === id) };
};

const useRelatedTaskQuery = (id: number) => {
  const { data, ...state } = useFetchTasksQuery();
  if (state.isLoading || state.isError) return { ...state, data: [] as TTasks };
  return { ...state, data: data?.filter((d) => d.id !== id) as TTasks };
};

export {
  useDeleteTaskMutation,
  useFetchTasksQuery,
  useEditTaskMutation,
  useSingleTaskQuery,
  useCreateTaskMutation,
  useRelatedTaskQuery,
};
