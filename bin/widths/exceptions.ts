import {RecordKey} from "@sagittal/general"
import {Octals, SMuFL_MAP, Unicode} from "../../src"

const EXCEPTION_WIDTHS: Record<RecordKey<Unicode>, Octals> = {
    [SMuFL_MAP["staff6Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff6LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff6LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff5Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff5LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff5LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff4Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff4LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff4LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff3Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff3LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff3LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff2Lines"]]: 0 as Octals,
    [SMuFL_MAP["staff2LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["staff2LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["staff1Line"]]: 0 as Octals,
    [SMuFL_MAP["staff1LineWide"]]: 0 as Octals,
    [SMuFL_MAP["staff1LineNarrow"]]: 0 as Octals,
    [SMuFL_MAP["chantStaff"]]: 0 as Octals,
    [SMuFL_MAP["chantStaffWide"]]: 0 as Octals,
    [SMuFL_MAP["chantStaffNarrow"]]: 0 as Octals,
    [SMuFL_MAP["luteStaff6Lines"]]: 0 as Octals,
    [SMuFL_MAP["luteStaff6LinesWide"]]: 0 as Octals,
    [SMuFL_MAP["luteStaff6LinesNarrow"]]: 0 as Octals,
    [SMuFL_MAP["barlineSingle"]]: 0 as Octals,
    [SMuFL_MAP["barlineDouble"]]: 3 as Octals,
}

export {
    EXCEPTION_WIDTHS,
}
