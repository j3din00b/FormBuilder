import React from "react"
import { FieldKind } from "@/schema"

import { BooleanFieldKind } from "./FieldKinds/BooleanFieldKind"
import { DateFieldKind } from "./FieldKinds/DateFieldKind"
import { EnumFieldKind } from "./FieldKinds/EnumFieldKind"
import { NumberFieldKind } from "./FieldKinds/NumberFieldKind"
import { StringFieldKind } from "./FieldKinds/StringFieldKind"

interface MoreInfoProps {
  id: string
  fieldKind: FieldKind
  idx: number
  moreInfo: string[]
}

const fieldKindComponents: Record<
  FieldKind,
  React.ComponentType<{ idx: number }>
> = {
  string: StringFieldKind,
  number: NumberFieldKind,
  boolean: BooleanFieldKind,
  enum: EnumFieldKind,
  date: DateFieldKind,
}

export function MoreInfo({ id, fieldKind, idx, moreInfo }: MoreInfoProps) {
  if (moreInfo.includes(id)) {
    const FieldKindComponent = fieldKindComponents[fieldKind]
    return FieldKindComponent ? <FieldKindComponent idx={idx} /> : null
  } else {
    return null
  }
}
