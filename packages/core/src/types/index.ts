export const fieldKind = [
	"string",
	"number",
	"boolean",
	"date",
	"enum",
	"textarea",
] as const;
export type FieldKind = (typeof fieldKind)[number];

export interface EnumValue {
	label: string;
	value: string;
	id: string;
}

export const enumStyleValues = ["radio", "select", "combobox"] as const;
export type EnumStyleValues = (typeof enumStyleValues)[number];

export interface ValidationOptions {
	format?: "email" | "string" | "password";
	min: number;
	max: number;
}

export interface FormField {
	id: string;
	label: string;
	desc?: string;
	placeholder?: string;
	key: string;
	kind: FieldKind;
	required: boolean;
	defaultValue?: string | number | boolean;
	style?: EnumStyleValues;
	enumValues?: EnumValue[];
	enumName?: string;
	validation?: ValidationOptions;
}
// TODO: add more settings and framework independent settings
export interface Settings {
	importAlias: string;
	mode: string;
	noDescription:boolean
	noPlaceholder:boolean
}

export type FormFramework =
	| "next"
	| "react"
	| "svelte"
	| "vue"
	| "solid"
	| "astro";
export interface FormSchema {
	id: number;
	settings: Settings;
	framework: FormFramework;
	name: string;
	fields: FormField[];
}
