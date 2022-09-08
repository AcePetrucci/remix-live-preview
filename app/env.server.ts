export const getCSENV = () => ({
	CS_API_KEY: process.env.CS_API_KEY as string,
	CS_MANAGEMENT_TOKEN: process.env.CS_MANAGEMENT_TOKEN as string,
	CS_DELIVERY_TOKEN: process.env.CS_DELIVERY_TOKEN as string,
	CS_ENV: process.env.CS_ENV as string,
	CS_API_HOST: process.env.CS_API_HOST as string
});

export const getPublicENV = () => ({
	CS_API_KEY: process.env.CS_API_KEY as string,
	UUID: process.env.UUID as string
});

export type CSENV = ReturnType<typeof getCSENV>;
export type PublicENV = ReturnType<typeof getPublicENV>;

declare global {
	var ENV: PublicENV;
	interface Window {
		ENV: PublicENV;
	}
}
