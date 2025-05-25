import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/analytics")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <iframe
        id="posthog-dashboard"
        width="100%"
        height="100%"
        style={{ border: "none", display: "block" }}
        src="https://us.posthog.com/embedded/PZmUB6GcWSy7jJubFhlAY1fEDDUGGg"
      />
    </div>
  );
}
