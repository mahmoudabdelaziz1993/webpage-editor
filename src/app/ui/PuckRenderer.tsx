import { Puck } from "@measured/puck";
import { config } from "../puck-config";
import "@measured/puck/puck.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PuckRenderer({ data }: { data: any }) {
    return <Puck config={config} data={data ?? {}} />;
}