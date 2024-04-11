import { api } from "~/trpc/server";

export default async function WritingSessions() {
  const sessions = await api.writtingSession.getUserSessions();

  return sessions.length ? (
    <div>
      <h1>Your Sessions</h1>
      <ul>
        {sessions.map((session) => (
          <li key={session.id}>{session.title}</li>
        ))}
      </ul>
    </div>
  ) : (
    <p>You have no sessions yet.</p>
  );
}
