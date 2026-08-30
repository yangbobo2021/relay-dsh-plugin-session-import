import { ReactNode } from "react";
import { PropsRuntime } from "@deepseek-ai/dsh-client-ui-slots";

//#region src/contracts.d.ts
/** One import implementation contributed by a provider plugin. */
interface SessionImportProviderDescriptor {
  /** Stable provider identity, also used as the menu item id. */
  id: string;
  /** Localized menu label, for example "Import from Codex". */
  label: string;
  /** Provider mark shown beside the explicit menu label. */
  icon: ReactNode;
  /** Deterministic menu ordering; lower values render first. */
  order?: number;
  /** Open the provider-owned import flow. */
  open: () => void;
}
/** Owner share passed by the hub to each renderless provider contribution. */
interface SessionImportProviderOwnerProps {
  /** Register while mounted and dispose the exact registration on unmount. */
  registerProvider: (provider: SessionImportProviderDescriptor) => () => void;
}
declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface SlotMap {
    /** Provider contributions mounted by the one session-import footer hub. */
    'relay.session-import.provider': {
      kind: 'list';
      scope: 'root';
      owner: SessionImportProviderOwnerProps;
    };
  }
}
/** Base props every provider contribution receives before its private inject/locale shares. */
type SessionImportProviderProps = PropsRuntime<'relay.session-import.provider'>;
//#endregion
export { SessionImportProviderDescriptor, SessionImportProviderOwnerProps, SessionImportProviderProps };
//# sourceMappingURL=contracts.d.ts.map