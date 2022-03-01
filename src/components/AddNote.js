import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

import { Input, Grid } from "@nextui-org/react";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
    props.showAlert("Added Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div
        className="container"
        style={{marginLeft: 0,marginRight:0}}
      >
        <form>
          <div className="mb-3">
            <Grid.Container gap={2} justify="center">
              <Grid xs={2}>
                <Input
                  rows="3"
                  type="text"
                  id="title"
                  name="title"
                  size="xl"
                  onChange={onChange}
                  minLength={5}
                  required
                  value={note.title}
                  Placeholder="Title"
                  fullWidth="true"
                  css={{
                    overflow: "hidden",
                  }}
                />
              </Grid>
              <Grid xs={9}>
                <Input
                  rows="3"
                  type="text"
                  id="description"
                  name="description"
                  size="xl"
                  onChange={onChange}
                  minLength={5}
                  required
                  value={note.description}
                  Placeholder="Write a Note here......"
                  fullWidth="true"
                  css={{
                    overflow: "hidden",
                  }}
                />
              </Grid>
              <Grid xs>
                <button
                  disabled={
                    note.title.length < 5 || note.description.length < 5
                  }
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleClick}
                >
                  Add_On
                </button>
              </Grid>
            </Grid.Container>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddNote;
