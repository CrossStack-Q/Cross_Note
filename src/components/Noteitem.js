import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import { Text, Card, Link, Button,Row } from "@nextui-org/react";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;
  return (
    <>
      <div className="col-md-4">
        <div className="my-3">
          <Card css={{ mw: "350px" }}>
            <Text b
              css={{
                overflow: "hidden",
              }}
            >
              {note.title}
              <Button.Group size="xs" color="error">
                <Button
                  onClick={() => {
                    deleteNote(note._id);
                    props.showAlert("Deleted Successfully", "warning");
                  }}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    updateNote(note);
                  }}
                  css={{
                    background: "$blue400", // colors.pink800
                    color: "$white",
                  }}
                >
                  Edit
                </Button>
              </Button.Group>
            </Text>
            <Text>{note.description}</Text>
            <Card.Footer></Card.Footer>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Noteitem;
