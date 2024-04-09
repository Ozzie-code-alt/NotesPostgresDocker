"use client"

import axios from "axios";
import { useEffect, useState } from "react";

type Notes = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
};

export default function Home() {
  const [notes, setNotes] = useState<Notes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching Data");
        const response = await axios.get("http://localhost:4001/notes");
        setNotes(response.data);
        console.log("Fetched Data", response.data);
      } catch (error) {
        console.log("Fetching Data Error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-dvh h-dvh">
      <h1 className="text-2xl">Notes</h1>
      {notes.map((note,) => (
        <div key={note.id} >
          <p>{note.title}</p>
          <p>{note.description}</p>
          <p>{note.id}</p>
          <p>{note.createdAt}</p>
        </div>
      ))}
    </div>
  );
}
