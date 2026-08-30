import type { ReactNode } from 'react'
import type { PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import type { SidebarFooterActionOwnerProps } from '@deepseek-ai/dsh-client-ui-sidebar/client'

type SidebarFooterContractAnchor = SidebarFooterActionOwnerProps

/** One import implementation contributed by a provider plugin. */
export interface SessionImportProviderDescriptor {
  /** Stable provider identity, also used as the menu item id. */
  id: string
  /** Localized menu label, for example "Import from Codex". */
  label: string
  /** Provider mark shown beside the explicit menu label. */
  icon: ReactNode
  /** Deterministic menu ordering; lower values render first. */
  order?: number
  /** Open the provider-owned import flow. */
  open: () => void
}

/** Owner share passed by the hub to each renderless provider contribution. */
export interface SessionImportProviderOwnerProps {
  /** Register while mounted and dispose the exact registration on unmount. */
  registerProvider: (provider: SessionImportProviderDescriptor) => () => void
}

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface SlotMap {
    /** Provider contributions mounted by the one session-import footer hub. */
    'relay.session-import.provider': {
      kind: 'list'
      scope: 'root'
      owner: SessionImportProviderOwnerProps
    }
  }
}

/** Base props every provider contribution receives before its private inject/locale shares. */
export type SessionImportProviderProps = PropsRuntime<'relay.session-import.provider'>
