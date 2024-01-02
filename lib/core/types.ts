import type PostCSSModulesPlugin from "postcss-modules";
import { SASSOptions } from "../sass";
import { ExportType, LogLevel, QuoteType } from "../typescript";

type CLIOnlyOptions = Extract<keyof SASSOptions, "importer">;

export interface CLIOptions extends Exclude<SASSOptions, CLIOnlyOptions> {
  banner: string;
  ignore: string[];
  ignoreInitial: boolean;
  exportType: ExportType;
  exportTypeName: string;
  exportTypeInterface: string;
  listDifferent: boolean;
  quoteType: QuoteType;
  updateStaleOnly: boolean;
  watch: boolean;
  logLevel: LogLevel;
  outputFolder: string | null;
}

type PostCSSModulesOptions = Parameters<PostCSSModulesPlugin>[0];
export interface ConfigOptions extends CLIOptions, SASSOptions {
  modules?: PostCSSModulesOptions;
}
