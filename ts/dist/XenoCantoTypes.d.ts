export interface Recording {
    also?: any[];
    alt?: string;
    animalseen?: string;
    auto?: string;
    cnt?: string;
    date?: string;
    dvc?: string;
    en?: string;
    file?: string;
    filename?: string;
    gen?: string;
    grp?: string;
    id?: string;
    lat?: string;
    length?: string;
    lic?: string;
    loc?: string;
    lon?: string;
    method?: string;
    mic?: string;
    osci?: Record<string, any>;
    playbackused?: string;
    q?: string;
    rec?: string;
    regnr?: string;
    rmk?: string;
    sex?: string;
    smp?: string;
    sono?: Record<string, any>;
    sp?: string;
    ssp?: string;
    stage?: string;
    temp?: string;
    time?: string;
    type?: string;
    uploaded?: string;
    url?: string;
}
export interface RecordingListMatch {
    key: string;
    page?: number;
    per_page?: number;
    query: string;
}
