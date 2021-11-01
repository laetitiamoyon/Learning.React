import { ActionStatus } from "./redux.model"

export const loadingActionMetadata = (state : any) : any => 
    ({ ...state, error : undefined, status : ActionStatus.Loading })

export const loadedActionMetadata = (state : any) : any =>
    ({ ...state, error : undefined, status : ActionStatus.Loaded })

export const failedActionMetadata = (error : string, state : any) : any =>
    ({ ...state, error, status : ActionStatus.Failed })



    