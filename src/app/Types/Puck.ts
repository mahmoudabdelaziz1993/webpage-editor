// To parse this data:
//
//   import { Convert, PuckData } from "./file";
//
//   const puckData = Convert.toPuckData(json);

import { DefaultComponentProps } from "@measured/puck";

export interface PuckData {
    root: {
        props: Record<string, unknown>;
    };
    content: Content<DefaultComponentProps>[];
    zones: Record<string, Content<DefaultComponentProps>>;
}

export interface Content<T> {
    type: string;
    props: Props & T;
}

export interface Props {
    id: string;
}

export interface Root {
    props: Zones;
}

export interface Zones {
    [key: string]: Record<string, Content<DefaultComponentProps>>

}

// Converts JSON strings to/from your types
export class Convert {
    public static toPuckData(json: string): PuckData {
        return JSON.parse(json);
    }

    public static puckDataToJson(value: PuckData): string {
        return JSON.stringify(value);
    }
}
