import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { api } from "~/trpc/server";

export default async function WritingSessions() {
  const sessions = await api.writtingSession.getUserSessions();

  return sessions.length ? (
    <div>
      <List>
        {sessions.map((session) => (
          <ListItem key="session">
            <ListItemButton divider className="rounded-lg bg-emerald-800 hover:bg-emerald-700">
              <ListItemText
                primary={session.title}
                secondary={session.createdAt.toLocaleDateString()}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  ) : (
    <p>You have no sessions yet.</p>
  );
}
