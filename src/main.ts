import "./style.css";
import "@univerjs/design/lib/index.css";
import "@univerjs/ui/lib/index.css";
import "@univerjs/docs-ui/lib/index.css";

import { LocaleType, LogLevel, Univer } from "@univerjs/core";
import { defaultTheme } from "@univerjs/design";
import { UniverDocsPlugin } from "@univerjs/docs";
import { UniverDocsUIPlugin } from "@univerjs/docs-ui";
import { UniverFormulaEnginePlugin } from "@univerjs/engine-formula";
import { UniverRenderEnginePlugin } from "@univerjs/engine-render";
import { UniverUIPlugin } from "@univerjs/ui";

import { DEFAULT_DOCUMENT_DATA_CN } from './data'

// univer
const univer = new Univer({
  theme: defaultTheme,
  locale: LocaleType.ZH_CN,
  logLevel: LogLevel.VERBOSE,
});

univer.registerPlugin(UniverRenderEnginePlugin);
univer.registerPlugin(UniverFormulaEnginePlugin);

univer.registerPlugin(UniverUIPlugin, {
  container: 'app',
  header: true,
  toolbar: true,
});

univer.registerPlugin(UniverDocsPlugin, {
  standalone: true,
});
univer.registerPlugin(UniverDocsUIPlugin, {
  container: 'univerdoc',
  layout: {
    docContainerConfig: {
      innerLeft: false,
    },
  },
});

univer.createUniverDoc(DEFAULT_DOCUMENT_DATA_CN);
