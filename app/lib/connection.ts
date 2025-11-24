import postgres from 'postgres';

const args = { }

export function get_connection() {
    // const args = { ssl: 'require' }

    // @ts-ignore
    return postgres(process.env.POSTGRES_URL!, args);
}