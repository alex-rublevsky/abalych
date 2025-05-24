import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

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
        src="https://us.posthog.com/embedded/t52Z6s9LPP3I_ALB3a4RokNA0XO6NA"
      />
    </div>
  );
}
