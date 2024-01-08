import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import AlarmIcon from "@mui/icons-material/Alarm";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const schema = yup.object({
  todoName: yup.string().label("TODO").trim().required("必須です。"),
});

export default function TodoList() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { todoName: "" },
    resolver: yupResolver(schema),
  });

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const onSubmit = () => {
    setTodoList((list) => [...list, { id: list.length + 1, name: todo }]);
    setTodo("");
  };

  const onError = (error) => {
    console.log(error);
  };

  const onDelete = (id) => {
    setTodoList((list) => list.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        // style={{ width: "1000px" }}
        noValidate
      >
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <label htmlFor="todoName">TODO:</label>
            </Grid>
            <Grid item xs={3}>
              <input
                id="todoName"
                type="text"
                {...register("todoName")}
                value={todo}
                onChange={(data) => setTodo(data.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <Button
                type="submit"
                variant="contained"
                endIcon={<SendIcon />}
                size="small"
              >
                送信
              </Button>
            </Grid>
          </Grid>
        </Box>
        <div>
          {/* <label htmlFor="todoName">TODO:</label>
            <input
              id="todoName"
              type="text"
              {...register("todoName")}
              value={todo}
              onChange={(data) => setTodo(data.target.value)}
            /> */}

          {/* <button type="submit">送信</button> */}
          {/* <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              size="small"
            >
              送信
            </Button> */}

          <div style={{ color: "red" }}>{errors.todoName?.message}</div>
        </div>
      </form>

      {/* TODOリスト */}
      <Stack direction="row" spacing={1}>
        <div>
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                {todo.name}

                {/* <button onClick={() => onDelete(todo.id)}>削除</button> */}
                <Button
                  variant="outlined"
                  startIcon={<DeleteIcon />}
                  onClick={() => onDelete(todo.id)}
                  size="small"
                >
                  削除
                </Button>

                <IconButton
                  aria-label="delete"
                  onClick={() => onDelete(todo.id)}
                  size="large"
                >
                  <DeleteIcon fontSize="inherit" />
                </IconButton>
              </li>
            ))}
          </ul>
        </div>
      </Stack>
    </>
  );
}
