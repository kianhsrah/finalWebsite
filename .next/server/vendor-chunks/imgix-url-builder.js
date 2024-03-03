"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/imgix-url-builder";
exports.ids = ["vendor-chunks/imgix-url-builder"];
exports.modules = {

/***/ "(ssr)/./node_modules/imgix-url-builder/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/imgix-url-builder/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Client: () => (/* binding */ Client),\n/* harmony export */   buildPixelDensitySrcSet: () => (/* binding */ buildPixelDensitySrcSet),\n/* harmony export */   buildURL: () => (/* binding */ buildURL),\n/* harmony export */   buildWidthSrcSet: () => (/* binding */ buildWidthSrcSet)\n/* harmony export */ });\nconst camelCaseToParamCase = (input)=>{\n    return input.replace(/[A-Z]/g, (match)=>{\n        return `-${match.toLowerCase()}`;\n    });\n};\nconst buildURL = (url, params)=>{\n    const instance = new URL(url);\n    for(const camelCasedParamKey in params){\n        const paramKey = camelCaseToParamCase(camelCasedParamKey);\n        const paramValue = params[camelCasedParamKey];\n        if (paramValue === void 0) {\n            instance.searchParams.delete(paramKey);\n        } else if (Array.isArray(paramValue)) {\n            instance.searchParams.set(paramKey, paramValue.join(\",\"));\n        } else {\n            instance.searchParams.set(paramKey, `${paramValue}`);\n        }\n    }\n    const s = instance.searchParams.get(\"s\");\n    if (s) {\n        instance.searchParams.delete(\"s\");\n        instance.searchParams.append(\"s\", s);\n    }\n    return instance.toString();\n};\nconst buildPixelDensitySrcSet = (url, { pixelDensities, ...params })=>{\n    return pixelDensities.map((dpr)=>{\n        return `${buildURL(url, {\n            ...params,\n            dpr\n        })} ${dpr}x`;\n    }).join(\", \");\n};\nconst buildWidthSrcSet = (url, { widths, ...params })=>{\n    return widths.map((width)=>{\n        return `${buildURL(url, {\n            ...params,\n            w: void 0,\n            width\n        })} ${width}w`;\n    }).join(\", \");\n};\nclass Client {\n    /**\n   * Creates a new `Client` instance for an Imgix domain.\n   *\n   * @param options - Options to instantiate a new client.\n   *\n   * @returns A `Client` instance for the given Imgix domain.\n   */ constructor(options){\n        this.baseURL = options.baseURL;\n    }\n    /**\n   * Builds a URL to an Imgix image with Imgix URL API parameters for the\n   * client's base URL.\n   *\n   * @example\n   *\n   * ```ts\n   * const client = new Client({ baseURL: \"https://example.imgix.net\" });\n   * const url = client.buildURLForPath(\"/image.png\", { width: 400 });\n   * // => https://example.imgix.net/image.png?width=400\n   * ```\n   *\n   * @example\n   *\n   * ```ts\n   * const client = new Client({\n   * \tbaseURL: \"https://example.imgix.net/folder\",\n   * });\n   * const url = client.buildURLForPath(\"./image.png\", { width: 400 });\n   * // => https://example.imgix.net/folder/image.png?width=400\n   * ```\n   *\n   * @param path - Path to the image relative to the client's base URL.\n   * @param params - An object of Imgix URL API parameters.\n   *\n   * @returns The full absolute URL to the image with the given Imgix URL API\n   *   parameters applied.\n   */ buildURLForPath(path, params = {}) {\n        return buildURL(`${new URL(path, this.baseURL)}`, params);\n    }\n    /**\n   * Builds an `<img>` `srcset` attribute value for a given set of widths for\n   * the client's base URL. It can also optinally apply Imgix URL API parameters\n   * to the URLs.\n   *\n   * The `width` URL parameter will be applied for each `srcset` entry. If a\n   * `width` or `w` parameter is provided to the `params` parameter, it will be\n   * ignored.\n   *\n   * @example\n   *\n   * ```ts\n   * const client = new Client({ baseURL: \"https://example.imgix.net\" });\n   * const srcset = client.buildWidthSrcSetForPath(\"/image.png\", {\n   * \twidths: [400, 800, 1600],\n   * });\n   * // => https://example.imgix.net/image.png?width=400 400w,\n   * //    https://example.imgix.net/image.png?width=800 800w,\n   * //    https://example.imgix.net/image.png?width=1600 1600w\n   * ```\n   *\n   * @example\n   *\n   * ```ts\n   * const client = new Client({\n   * \tbaseURL: \"https://example.imgix.net\",\n   * });\n   * const srcset = client.buildWidthSrcSetForPath(\"/image.png\", {\n   * \twidths: [400, 800, 1600],\n   * \tsat: -100,\n   * });\n   * // => https://example.imgix.net/image.png?width=400&sat=-100 400w,\n   * //    https://example.imgix.net/image.png?width=800&sat=-100 800w,\n   * //    https://example.imgix.net/image.png?width=1600&sat=-100 1600w\n   * ```\n   *\n   * @param path - Path to the image relative to the client's base URL.\n   * @param params - An object of Imgix URL API parameters. The `widths`\n   *   parameter defines the resulting `srcset` widths.\n   *\n   * @returns A `srcset` attribute value for `url` with the given Imgix URL API\n   *   parameters applied.\n   */ buildWidthSrcSetForPath(path, params) {\n        return buildWidthSrcSet(`${new URL(path, this.baseURL)}`, params);\n    }\n    /**\n   * Builds an `<img>` `srcset` attribute value for a given set of pixel\n   * densities for the client's base URL. It can also optinally apply Imgix URL\n   * API parameters to the URLs.\n   *\n   * The `dpr` URL parameter will be applied for each `srcset` entry. If a `dpr`\n   * parameter is provided to the `params` parameter, it will be ignored.\n   *\n   * @example\n   *\n   * ```ts\n   * const client = new Client({ baseURL: \"https://example.imgix.net\" });\n   * const srcset = client.buildPixelDensitySrcSetForPath(\"/image.png\", {\n   * \tpixelDensities: [1, 2, 3],\n   * });\n   * // => https://example.imgix.net/image.png?dpr=1 1x,\n   * //    https://example.imgix.net/image.png?dpr=2 2x,\n   * //    https://example.imgix.net/image.png?dpr=3 3x\n   * ```\n   *\n   * @example\n   *\n   * ```ts\n   * const client = new Client({ baseURL: \"https://example.imgix.net\" });\n   * const srcset = client.buildPixelDensitySrcSetForPath(\"/image.png\", {\n   * \tpixelDensities: [1, 2, 3],\n   * \tsat: -100,\n   * });\n   * // => https://example.imgix.net/image.png?dpr=1&sat=-100 1x,\n   * //    https://example.imgix.net/image.png?dpr=2&sat=-100 2x,\n   * //    https://example.imgix.net/image.png?dpr=3&sat=-100 3x\n   * ```\n   *\n   * @param path - Path to the image relative to the client's base URL.\n   * @param params - An object of Imgix URL API parameters. The `pixelDensities`\n   *   parameter defines the resulting `srcset` widths.\n   *\n   * @returns A `srcset` attribute value for `url` with the given Imgix URL API\n   *   parameters applied.\n   */ buildPixelDensitySrcSetForPath(path, params) {\n        return buildPixelDensitySrcSet(`${new URL(path, this.baseURL)}`, params);\n    }\n}\n //# sourceMappingURL=index.mjs.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW1naXgtdXJsLWJ1aWxkZXIvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLE1BQU1BLHVCQUF1QixDQUFDQztJQUM1QixPQUFPQSxNQUFNQyxPQUFPLENBQUMsVUFBVSxDQUFDQztRQUM5QixPQUFPLENBQUMsQ0FBQyxFQUFFQSxNQUFNQyxXQUFXLEdBQUcsQ0FBQztJQUNsQztBQUNGO0FBQ0EsTUFBTUMsV0FBVyxDQUFDQyxLQUFLQztJQUNyQixNQUFNQyxXQUFXLElBQUlDLElBQUlIO0lBQ3pCLElBQUssTUFBTUksc0JBQXNCSCxPQUFRO1FBQ3ZDLE1BQU1JLFdBQVdYLHFCQUFxQlU7UUFDdEMsTUFBTUUsYUFBYUwsTUFBTSxDQUFDRyxtQkFBbUI7UUFDN0MsSUFBSUUsZUFBZSxLQUFLLEdBQUc7WUFDekJKLFNBQVNLLFlBQVksQ0FBQ0MsTUFBTSxDQUFDSDtRQUMvQixPQUFPLElBQUlJLE1BQU1DLE9BQU8sQ0FBQ0osYUFBYTtZQUNwQ0osU0FBU0ssWUFBWSxDQUFDSSxHQUFHLENBQUNOLFVBQVVDLFdBQVdNLElBQUksQ0FBQztRQUN0RCxPQUFPO1lBQ0xWLFNBQVNLLFlBQVksQ0FBQ0ksR0FBRyxDQUFDTixVQUFVLENBQUMsRUFBRUMsV0FBVyxDQUFDO1FBQ3JEO0lBQ0Y7SUFDQSxNQUFNTyxJQUFJWCxTQUFTSyxZQUFZLENBQUNPLEdBQUcsQ0FBQztJQUNwQyxJQUFJRCxHQUFHO1FBQ0xYLFNBQVNLLFlBQVksQ0FBQ0MsTUFBTSxDQUFDO1FBQzdCTixTQUFTSyxZQUFZLENBQUNRLE1BQU0sQ0FBQyxLQUFLRjtJQUNwQztJQUNBLE9BQU9YLFNBQVNjLFFBQVE7QUFDMUI7QUFFQSxNQUFNQywwQkFBMEIsQ0FBQ2pCLEtBQUssRUFBRWtCLGNBQWMsRUFBRSxHQUFHakIsUUFBUTtJQUNqRSxPQUFPaUIsZUFBZUMsR0FBRyxDQUFDLENBQUNDO1FBQ3pCLE9BQU8sQ0FBQyxFQUFFckIsU0FBU0MsS0FBSztZQUFFLEdBQUdDLE1BQU07WUFBRW1CO1FBQUksR0FBRyxDQUFDLEVBQUVBLElBQUksQ0FBQyxDQUFDO0lBQ3ZELEdBQUdSLElBQUksQ0FBQztBQUNWO0FBRUEsTUFBTVMsbUJBQW1CLENBQUNyQixLQUFLLEVBQUVzQixNQUFNLEVBQUUsR0FBR3JCLFFBQVE7SUFDbEQsT0FBT3FCLE9BQU9ILEdBQUcsQ0FBQyxDQUFDSTtRQUNqQixPQUFPLENBQUMsRUFBRXhCLFNBQVNDLEtBQUs7WUFBRSxHQUFHQyxNQUFNO1lBQUV1QixHQUFHLEtBQUs7WUFBR0Q7UUFBTSxHQUFHLENBQUMsRUFBRUEsTUFBTSxDQUFDLENBQUM7SUFDdEUsR0FBR1gsSUFBSSxDQUFDO0FBQ1Y7QUFFQSxNQUFNYTtJQUNKOzs7Ozs7R0FNQyxHQUNEQyxZQUFZQyxPQUFPLENBQUU7UUFDbkIsSUFBSSxDQUFDQyxPQUFPLEdBQUdELFFBQVFDLE9BQU87SUFDaEM7SUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJDLEdBQ0RDLGdCQUFnQkMsSUFBSSxFQUFFN0IsU0FBUyxDQUFDLENBQUMsRUFBRTtRQUNqQyxPQUFPRixTQUFTLENBQUMsRUFBRSxJQUFJSSxJQUFJMkIsTUFBTSxJQUFJLENBQUNGLE9BQU8sRUFBRSxDQUFDLEVBQUUzQjtJQUNwRDtJQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EwQ0MsR0FDRDhCLHdCQUF3QkQsSUFBSSxFQUFFN0IsTUFBTSxFQUFFO1FBQ3BDLE9BQU9vQixpQkFBaUIsQ0FBQyxFQUFFLElBQUlsQixJQUFJMkIsTUFBTSxJQUFJLENBQUNGLE9BQU8sRUFBRSxDQUFDLEVBQUUzQjtJQUM1RDtJQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Q0MsR0FDRCtCLCtCQUErQkYsSUFBSSxFQUFFN0IsTUFBTSxFQUFFO1FBQzNDLE9BQU9nQix3QkFBd0IsQ0FBQyxFQUFFLElBQUlkLElBQUkyQixNQUFNLElBQUksQ0FBQ0YsT0FBTyxFQUFFLENBQUMsRUFBRTNCO0lBQ25FO0FBQ0Y7QUFFdUUsQ0FDdkUsa0NBQWtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFyc2huYWlrLy4vbm9kZV9tb2R1bGVzL2ltZ2l4LXVybC1idWlsZGVyL2Rpc3QvaW5kZXgubWpzPzVlMzEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2FtZWxDYXNlVG9QYXJhbUNhc2UgPSAoaW5wdXQpID0+IHtcbiAgcmV0dXJuIGlucHV0LnJlcGxhY2UoL1tBLVpdL2csIChtYXRjaCkgPT4ge1xuICAgIHJldHVybiBgLSR7bWF0Y2gudG9Mb3dlckNhc2UoKX1gO1xuICB9KTtcbn07XG5jb25zdCBidWlsZFVSTCA9ICh1cmwsIHBhcmFtcykgPT4ge1xuICBjb25zdCBpbnN0YW5jZSA9IG5ldyBVUkwodXJsKTtcbiAgZm9yIChjb25zdCBjYW1lbENhc2VkUGFyYW1LZXkgaW4gcGFyYW1zKSB7XG4gICAgY29uc3QgcGFyYW1LZXkgPSBjYW1lbENhc2VUb1BhcmFtQ2FzZShjYW1lbENhc2VkUGFyYW1LZXkpO1xuICAgIGNvbnN0IHBhcmFtVmFsdWUgPSBwYXJhbXNbY2FtZWxDYXNlZFBhcmFtS2V5XTtcbiAgICBpZiAocGFyYW1WYWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBpbnN0YW5jZS5zZWFyY2hQYXJhbXMuZGVsZXRlKHBhcmFtS2V5KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocGFyYW1WYWx1ZSkpIHtcbiAgICAgIGluc3RhbmNlLnNlYXJjaFBhcmFtcy5zZXQocGFyYW1LZXksIHBhcmFtVmFsdWUuam9pbihcIixcIikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnN0YW5jZS5zZWFyY2hQYXJhbXMuc2V0KHBhcmFtS2V5LCBgJHtwYXJhbVZhbHVlfWApO1xuICAgIH1cbiAgfVxuICBjb25zdCBzID0gaW5zdGFuY2Uuc2VhcmNoUGFyYW1zLmdldChcInNcIik7XG4gIGlmIChzKSB7XG4gICAgaW5zdGFuY2Uuc2VhcmNoUGFyYW1zLmRlbGV0ZShcInNcIik7XG4gICAgaW5zdGFuY2Uuc2VhcmNoUGFyYW1zLmFwcGVuZChcInNcIiwgcyk7XG4gIH1cbiAgcmV0dXJuIGluc3RhbmNlLnRvU3RyaW5nKCk7XG59O1xuXG5jb25zdCBidWlsZFBpeGVsRGVuc2l0eVNyY1NldCA9ICh1cmwsIHsgcGl4ZWxEZW5zaXRpZXMsIC4uLnBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiBwaXhlbERlbnNpdGllcy5tYXAoKGRwcikgPT4ge1xuICAgIHJldHVybiBgJHtidWlsZFVSTCh1cmwsIHsgLi4ucGFyYW1zLCBkcHIgfSl9ICR7ZHByfXhgO1xuICB9KS5qb2luKFwiLCBcIik7XG59O1xuXG5jb25zdCBidWlsZFdpZHRoU3JjU2V0ID0gKHVybCwgeyB3aWR0aHMsIC4uLnBhcmFtcyB9KSA9PiB7XG4gIHJldHVybiB3aWR0aHMubWFwKCh3aWR0aCkgPT4ge1xuICAgIHJldHVybiBgJHtidWlsZFVSTCh1cmwsIHsgLi4ucGFyYW1zLCB3OiB2b2lkIDAsIHdpZHRoIH0pfSAke3dpZHRofXdgO1xuICB9KS5qb2luKFwiLCBcIik7XG59O1xuXG5jbGFzcyBDbGllbnQge1xuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBgQ2xpZW50YCBpbnN0YW5jZSBmb3IgYW4gSW1naXggZG9tYWluLlxuICAgKlxuICAgKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbnMgdG8gaW5zdGFudGlhdGUgYSBuZXcgY2xpZW50LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGBDbGllbnRgIGluc3RhbmNlIGZvciB0aGUgZ2l2ZW4gSW1naXggZG9tYWluLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuYmFzZVVSTCA9IG9wdGlvbnMuYmFzZVVSTDtcbiAgfVxuICAvKipcbiAgICogQnVpbGRzIGEgVVJMIHRvIGFuIEltZ2l4IGltYWdlIHdpdGggSW1naXggVVJMIEFQSSBwYXJhbWV0ZXJzIGZvciB0aGVcbiAgICogY2xpZW50J3MgYmFzZSBVUkwuXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoeyBiYXNlVVJMOiBcImh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXRcIiB9KTtcbiAgICogY29uc3QgdXJsID0gY2xpZW50LmJ1aWxkVVJMRm9yUGF0aChcIi9pbWFnZS5wbmdcIiwgeyB3aWR0aDogNDAwIH0pO1xuICAgKiAvLyA9PiBodHRwczovL2V4YW1wbGUuaW1naXgubmV0L2ltYWdlLnBuZz93aWR0aD00MDBcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICAgKiBcdGJhc2VVUkw6IFwiaHR0cHM6Ly9leGFtcGxlLmltZ2l4Lm5ldC9mb2xkZXJcIixcbiAgICogfSk7XG4gICAqIGNvbnN0IHVybCA9IGNsaWVudC5idWlsZFVSTEZvclBhdGgoXCIuL2ltYWdlLnBuZ1wiLCB7IHdpZHRoOiA0MDAgfSk7XG4gICAqIC8vID0+IGh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXQvZm9sZGVyL2ltYWdlLnBuZz93aWR0aD00MDBcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSBwYXRoIC0gUGF0aCB0byB0aGUgaW1hZ2UgcmVsYXRpdmUgdG8gdGhlIGNsaWVudCdzIGJhc2UgVVJMLlxuICAgKiBAcGFyYW0gcGFyYW1zIC0gQW4gb2JqZWN0IG9mIEltZ2l4IFVSTCBBUEkgcGFyYW1ldGVycy5cbiAgICpcbiAgICogQHJldHVybnMgVGhlIGZ1bGwgYWJzb2x1dGUgVVJMIHRvIHRoZSBpbWFnZSB3aXRoIHRoZSBnaXZlbiBJbWdpeCBVUkwgQVBJXG4gICAqICAgcGFyYW1ldGVycyBhcHBsaWVkLlxuICAgKi9cbiAgYnVpbGRVUkxGb3JQYXRoKHBhdGgsIHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIGJ1aWxkVVJMKGAke25ldyBVUkwocGF0aCwgdGhpcy5iYXNlVVJMKX1gLCBwYXJhbXMpO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgYW4gYDxpbWc+YCBgc3Jjc2V0YCBhdHRyaWJ1dGUgdmFsdWUgZm9yIGEgZ2l2ZW4gc2V0IG9mIHdpZHRocyBmb3JcbiAgICogdGhlIGNsaWVudCdzIGJhc2UgVVJMLiBJdCBjYW4gYWxzbyBvcHRpbmFsbHkgYXBwbHkgSW1naXggVVJMIEFQSSBwYXJhbWV0ZXJzXG4gICAqIHRvIHRoZSBVUkxzLlxuICAgKlxuICAgKiBUaGUgYHdpZHRoYCBVUkwgcGFyYW1ldGVyIHdpbGwgYmUgYXBwbGllZCBmb3IgZWFjaCBgc3Jjc2V0YCBlbnRyeS4gSWYgYVxuICAgKiBgd2lkdGhgIG9yIGB3YCBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQgdG8gdGhlIGBwYXJhbXNgIHBhcmFtZXRlciwgaXQgd2lsbCBiZVxuICAgKiBpZ25vcmVkLlxuICAgKlxuICAgKiBAZXhhbXBsZVxuICAgKlxuICAgKiBgYGB0c1xuICAgKiBjb25zdCBjbGllbnQgPSBuZXcgQ2xpZW50KHsgYmFzZVVSTDogXCJodHRwczovL2V4YW1wbGUuaW1naXgubmV0XCIgfSk7XG4gICAqIGNvbnN0IHNyY3NldCA9IGNsaWVudC5idWlsZFdpZHRoU3JjU2V0Rm9yUGF0aChcIi9pbWFnZS5wbmdcIiwge1xuICAgKiBcdHdpZHRoczogWzQwMCwgODAwLCAxNjAwXSxcbiAgICogfSk7XG4gICAqIC8vID0+IGh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXQvaW1hZ2UucG5nP3dpZHRoPTQwMCA0MDB3LFxuICAgKiAvLyAgICBodHRwczovL2V4YW1wbGUuaW1naXgubmV0L2ltYWdlLnBuZz93aWR0aD04MDAgODAwdyxcbiAgICogLy8gICAgaHR0cHM6Ly9leGFtcGxlLmltZ2l4Lm5ldC9pbWFnZS5wbmc/d2lkdGg9MTYwMCAxNjAwd1xuICAgKiBgYGBcbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7XG4gICAqIFx0YmFzZVVSTDogXCJodHRwczovL2V4YW1wbGUuaW1naXgubmV0XCIsXG4gICAqIH0pO1xuICAgKiBjb25zdCBzcmNzZXQgPSBjbGllbnQuYnVpbGRXaWR0aFNyY1NldEZvclBhdGgoXCIvaW1hZ2UucG5nXCIsIHtcbiAgICogXHR3aWR0aHM6IFs0MDAsIDgwMCwgMTYwMF0sXG4gICAqIFx0c2F0OiAtMTAwLFxuICAgKiB9KTtcbiAgICogLy8gPT4gaHR0cHM6Ly9leGFtcGxlLmltZ2l4Lm5ldC9pbWFnZS5wbmc/d2lkdGg9NDAwJnNhdD0tMTAwIDQwMHcsXG4gICAqIC8vICAgIGh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXQvaW1hZ2UucG5nP3dpZHRoPTgwMCZzYXQ9LTEwMCA4MDB3LFxuICAgKiAvLyAgICBodHRwczovL2V4YW1wbGUuaW1naXgubmV0L2ltYWdlLnBuZz93aWR0aD0xNjAwJnNhdD0tMTAwIDE2MDB3XG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gcGF0aCAtIFBhdGggdG8gdGhlIGltYWdlIHJlbGF0aXZlIHRvIHRoZSBjbGllbnQncyBiYXNlIFVSTC5cbiAgICogQHBhcmFtIHBhcmFtcyAtIEFuIG9iamVjdCBvZiBJbWdpeCBVUkwgQVBJIHBhcmFtZXRlcnMuIFRoZSBgd2lkdGhzYFxuICAgKiAgIHBhcmFtZXRlciBkZWZpbmVzIHRoZSByZXN1bHRpbmcgYHNyY3NldGAgd2lkdGhzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGBzcmNzZXRgIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgYHVybGAgd2l0aCB0aGUgZ2l2ZW4gSW1naXggVVJMIEFQSVxuICAgKiAgIHBhcmFtZXRlcnMgYXBwbGllZC5cbiAgICovXG4gIGJ1aWxkV2lkdGhTcmNTZXRGb3JQYXRoKHBhdGgsIHBhcmFtcykge1xuICAgIHJldHVybiBidWlsZFdpZHRoU3JjU2V0KGAke25ldyBVUkwocGF0aCwgdGhpcy5iYXNlVVJMKX1gLCBwYXJhbXMpO1xuICB9XG4gIC8qKlxuICAgKiBCdWlsZHMgYW4gYDxpbWc+YCBgc3Jjc2V0YCBhdHRyaWJ1dGUgdmFsdWUgZm9yIGEgZ2l2ZW4gc2V0IG9mIHBpeGVsXG4gICAqIGRlbnNpdGllcyBmb3IgdGhlIGNsaWVudCdzIGJhc2UgVVJMLiBJdCBjYW4gYWxzbyBvcHRpbmFsbHkgYXBwbHkgSW1naXggVVJMXG4gICAqIEFQSSBwYXJhbWV0ZXJzIHRvIHRoZSBVUkxzLlxuICAgKlxuICAgKiBUaGUgYGRwcmAgVVJMIHBhcmFtZXRlciB3aWxsIGJlIGFwcGxpZWQgZm9yIGVhY2ggYHNyY3NldGAgZW50cnkuIElmIGEgYGRwcmBcbiAgICogcGFyYW1ldGVyIGlzIHByb3ZpZGVkIHRvIHRoZSBgcGFyYW1zYCBwYXJhbWV0ZXIsIGl0IHdpbGwgYmUgaWdub3JlZC5cbiAgICpcbiAgICogQGV4YW1wbGVcbiAgICpcbiAgICogYGBgdHNcbiAgICogY29uc3QgY2xpZW50ID0gbmV3IENsaWVudCh7IGJhc2VVUkw6IFwiaHR0cHM6Ly9leGFtcGxlLmltZ2l4Lm5ldFwiIH0pO1xuICAgKiBjb25zdCBzcmNzZXQgPSBjbGllbnQuYnVpbGRQaXhlbERlbnNpdHlTcmNTZXRGb3JQYXRoKFwiL2ltYWdlLnBuZ1wiLCB7XG4gICAqIFx0cGl4ZWxEZW5zaXRpZXM6IFsxLCAyLCAzXSxcbiAgICogfSk7XG4gICAqIC8vID0+IGh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXQvaW1hZ2UucG5nP2Rwcj0xIDF4LFxuICAgKiAvLyAgICBodHRwczovL2V4YW1wbGUuaW1naXgubmV0L2ltYWdlLnBuZz9kcHI9MiAyeCxcbiAgICogLy8gICAgaHR0cHM6Ly9leGFtcGxlLmltZ2l4Lm5ldC9pbWFnZS5wbmc/ZHByPTMgM3hcbiAgICogYGBgXG4gICAqXG4gICAqIEBleGFtcGxlXG4gICAqXG4gICAqIGBgYHRzXG4gICAqIGNvbnN0IGNsaWVudCA9IG5ldyBDbGllbnQoeyBiYXNlVVJMOiBcImh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXRcIiB9KTtcbiAgICogY29uc3Qgc3Jjc2V0ID0gY2xpZW50LmJ1aWxkUGl4ZWxEZW5zaXR5U3JjU2V0Rm9yUGF0aChcIi9pbWFnZS5wbmdcIiwge1xuICAgKiBcdHBpeGVsRGVuc2l0aWVzOiBbMSwgMiwgM10sXG4gICAqIFx0c2F0OiAtMTAwLFxuICAgKiB9KTtcbiAgICogLy8gPT4gaHR0cHM6Ly9leGFtcGxlLmltZ2l4Lm5ldC9pbWFnZS5wbmc/ZHByPTEmc2F0PS0xMDAgMXgsXG4gICAqIC8vICAgIGh0dHBzOi8vZXhhbXBsZS5pbWdpeC5uZXQvaW1hZ2UucG5nP2Rwcj0yJnNhdD0tMTAwIDJ4LFxuICAgKiAvLyAgICBodHRwczovL2V4YW1wbGUuaW1naXgubmV0L2ltYWdlLnBuZz9kcHI9MyZzYXQ9LTEwMCAzeFxuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHBhdGggLSBQYXRoIHRvIHRoZSBpbWFnZSByZWxhdGl2ZSB0byB0aGUgY2xpZW50J3MgYmFzZSBVUkwuXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBBbiBvYmplY3Qgb2YgSW1naXggVVJMIEFQSSBwYXJhbWV0ZXJzLiBUaGUgYHBpeGVsRGVuc2l0aWVzYFxuICAgKiAgIHBhcmFtZXRlciBkZWZpbmVzIHRoZSByZXN1bHRpbmcgYHNyY3NldGAgd2lkdGhzLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGBzcmNzZXRgIGF0dHJpYnV0ZSB2YWx1ZSBmb3IgYHVybGAgd2l0aCB0aGUgZ2l2ZW4gSW1naXggVVJMIEFQSVxuICAgKiAgIHBhcmFtZXRlcnMgYXBwbGllZC5cbiAgICovXG4gIGJ1aWxkUGl4ZWxEZW5zaXR5U3JjU2V0Rm9yUGF0aChwYXRoLCBwYXJhbXMpIHtcbiAgICByZXR1cm4gYnVpbGRQaXhlbERlbnNpdHlTcmNTZXQoYCR7bmV3IFVSTChwYXRoLCB0aGlzLmJhc2VVUkwpfWAsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQ2xpZW50LCBidWlsZFBpeGVsRGVuc2l0eVNyY1NldCwgYnVpbGRVUkwsIGJ1aWxkV2lkdGhTcmNTZXQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4Lm1qcy5tYXBcbiJdLCJuYW1lcyI6WyJjYW1lbENhc2VUb1BhcmFtQ2FzZSIsImlucHV0IiwicmVwbGFjZSIsIm1hdGNoIiwidG9Mb3dlckNhc2UiLCJidWlsZFVSTCIsInVybCIsInBhcmFtcyIsImluc3RhbmNlIiwiVVJMIiwiY2FtZWxDYXNlZFBhcmFtS2V5IiwicGFyYW1LZXkiLCJwYXJhbVZhbHVlIiwic2VhcmNoUGFyYW1zIiwiZGVsZXRlIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0Iiwiam9pbiIsInMiLCJnZXQiLCJhcHBlbmQiLCJ0b1N0cmluZyIsImJ1aWxkUGl4ZWxEZW5zaXR5U3JjU2V0IiwicGl4ZWxEZW5zaXRpZXMiLCJtYXAiLCJkcHIiLCJidWlsZFdpZHRoU3JjU2V0Iiwid2lkdGhzIiwid2lkdGgiLCJ3IiwiQ2xpZW50IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwiYmFzZVVSTCIsImJ1aWxkVVJMRm9yUGF0aCIsInBhdGgiLCJidWlsZFdpZHRoU3JjU2V0Rm9yUGF0aCIsImJ1aWxkUGl4ZWxEZW5zaXR5U3JjU2V0Rm9yUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/imgix-url-builder/dist/index.mjs\n");

/***/ })

};
;