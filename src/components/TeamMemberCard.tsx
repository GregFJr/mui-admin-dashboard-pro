"use client";

import {
  Avatar,
  Checkbox,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function TeamMemberCard() {
  const [members, setMembers] = useState([false, true, false, false, false, false]);

  const toggleMember =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newMembers = [...members];
      newMembers[index] = event.target.checked;
      setMembers(newMembers);
    };

  const teamData = [
    {
      name: "Friedrich Oberbrunner",
      initials: "FO",
      title: "Product Manager",
      handle: "@friedrich",
    },
    {
      name: "Adeline O'Reilly",
      initials: "AO",
      title: "UX Designer",
      handle: "@adeline",
    },
    {
      name: "Fernando Pidrillio",
      initials: "FP",
      title: "Backend Engineer",
      handle: "@fernando",
    },
    {
      name: "Jalen Hurts",
      initials: "JL",
      title: "QA Tester",
      handle: "@jalen",
    },
    {
      name: "Arthur Brown",
      initials: "AB",
      title: "Frontend Dev",
      handle: "@arthur",
    },
  ];

  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        width: 360,
        maxWidth: "100%",
        mt: 3,
        background: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <Typography
        sx={{
          textTransform: "uppercase",
          fontSize: 12,
          letterSpacing: "0.1em",
          fontWeight: 600,
          color: "text.secondary",
          mb: 2,
        }}
      >
        Team Members
      </Typography>

      <List>
        {teamData.map((member, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>{member.initials}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={member.name}
              secondary={`${member.title} • ${member.handle}`}
            />
            <Checkbox checked={members[index]} onChange={toggleMember(index)} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
