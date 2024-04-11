import { List, ListItemButton, ListItemText } from "@mui/material";
import { api } from "~/trpc/server";

export default async function WritingSessions() {
  const sessions = await api.writtingSession.getUserSessions();

  return sessions.length ? (
    <div>
      <List className="gap-4">
        {sessions.map((session) => (
          <ListItemButton divider key="session" className="rounded-lg hover:bg-emerald-700">
            <ListItemText primary={session.title} secondary={session.createdAt.toLocaleDateString()} />
          </ListItemButton>
        ))}
      </List>
    </div>
  ) : (
    <p>You have no sessions yet.</p>
  );
}
