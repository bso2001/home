import { PASS, FAIL } from "../helpers-and-data";
import { ROUTE_PRESENTATION } from "lib/constants";
import { useSelector } from "react-redux";
import { selectClientConfig } from "store/selectors";

/**
 * @method testGlisser
 * @return {Promise}
 */

export const testGlisser = () =>
{
	const clientConfig = useSelector(selectClientConfig);

	return new Promise((resolve) =>
	{
		const { iframeSrc } = clientConfig?.widgets?.find(({ type }) => type === ROUTE_PRESENTATION);
		const iframe = document.getElementById("test-glisser");
		iframe.onload = () => resolve(PASS);
		iframe.onerror = () => resolve(FAIL);
		iframe.setAttribute("src", iframeSrc);
	});
};
