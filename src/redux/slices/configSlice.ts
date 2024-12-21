import {createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface ConfigState {
    darkMode: boolean;
    dbType: 'sqlite' | 'mysql' | 'postgresql';
    dbPath: string;
    mysqlHost: string;
    mysqlUser: string;
    mysqlPassword: string;
    mysqlDatabase: string;
    postgresHost: string;
    postgresUser: string;
    postgresPassword: string;
    postgresDatabase: string;

}

const initialState: ConfigState = {
    darkMode: false,
    dbType: 'sqlite',
    dbPath: '',
    mysqlHost: '',
    mysqlUser: '',
    mysqlPassword: '',
    mysqlDatabase: '',
    postgresHost: '',
    postgresUser: '',
    postgresPassword: '',
    postgresDatabase: '',
};

const configSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {
        setDarkMode(state, action: PayloadAction<boolean>) {
            state.darkMode = action.payload;
        },
        setDbType(state, action: PayloadAction<ConfigState['dbType']>) {
            state.dbType = action.payload;
        },
        setDbPath(state, action: PayloadAction<string>) {
            state.dbPath = action.payload;
        },
        setMysqlHost(state, action: PayloadAction<string>) {
            state.mysqlHost = action.payload;
        },
        setMysqlUser(state, action: PayloadAction<string>) {
            state.mysqlUser = action.payload;
        },
        setMysqlPassword(state, action: PayloadAction<string>) {
            state.mysqlPassword = action.payload;
        },
        setMysqlDatabase(state, action: PayloadAction<string>) {
            state.mysqlDatabase = action.payload;
        },
        setPostgresHost(state, action: PayloadAction<string>) {
            state.postgresHost = action.payload;
        },
        setPostgresUser(state, action: PayloadAction<string>) {
            state.postgresUser = action.payload;
        },
        setPostgresPassword(state, action: PayloadAction<string>) {
            state.postgresPassword = action.payload;
        },
        setPostgresDatabase(state, action: PayloadAction<string>) {
            state.postgresDatabase = action.payload;
        },
    },
});

export const {
    setDarkMode,
    setDbType,
    setDbPath,
    setMysqlHost,
    setMysqlUser,
    setMysqlPassword,
    setMysqlDatabase,
    setPostgresHost,
    setPostgresUser,
    setPostgresPassword,
    setPostgresDatabase,
} = configSlice.actions;

export default configSlice.reducer;