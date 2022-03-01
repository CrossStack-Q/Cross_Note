import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Card,
  Text,
  Container,
  Button,
} from "@nextui-org/react";

const Notes = (props) => {
  const context = useContext(noteContext);
  let history2 = useNavigate();
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      history2("/login");
    }
    // eslint-disable-next-line
  }, []);
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };
  const ref = useRef(null);
  const refclose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "default",
  });
  const handleClick = (e) => {
    console.log("Updating the note...", note);
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refclose.current.click();
    props.showAlert("Updated Successfully", "success");
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };


  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        ref={ref}
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    value={note.etitle}
                    name="etitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Discription
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    value={note.edescription}
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                ref={refclose}
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Notes
              </button>
            </div>
          </div>
        </div>
      </div>
      <AddNote showAlert={props.showAlert} />

      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      {/* ///////////////////////////////////////////////// */}
      <Container
        gap={0}
        css={{
          marginLeft: 0,
          h: "float",
          marginRight: 0,
        }}
      >
        <Grid.Container gap={1} justify="center">
          <Grid xs
          >
            <Card color="white">
              <Button
                light
                color="success"
                auto
                css={{
                  margin: 10,
                }}
              >
                <Text h4 b>
                  Notes
                </Text>
              </Button>
              <Button
                light
                color="success"
                auto
                css={{
                  margin: 10,
                  padding: 0,
                }}
              >
                <Text h4 b>
                  Reminder
                </Text>
              </Button>
              <Button
                light
                color="success"
                auto
                css={{
                  margin: 10,
                  padding: 0,
                }}
              >
                <Text h4 b>
                  Archive
                </Text>
                <br />
              </Button>
              <Button
                light
                color="success"
                auto
                css={{
                  margin: 10,
                  padding: 0,
                }}
              >
                <Text h4 b>
                  Bin
                </Text>
              </Button>
              <Button
                light
                color="success"
                auto
                css={{
                  margin: 10,
                  padding: 0,
                }}
              >
                <Text h4 b>
                  Error
                </Text>
              </Button>
            </Card>
          </Grid>
          <Grid xs={10}
          >
            <div className="container row my-3">
              {notes.length === 0 && "No Notes to display"}
              {notes.map((note) => {
                return (
                  <Noteitem
                    key={note._id}
                    updateNote={updateNote}
                    showAlert={props.showAlert}
                    note={note}
                  />
                );
              })}
            </div>
          </Grid>
        </Grid.Container>
      </Container>
    </div>
  );
};

export default Notes;
