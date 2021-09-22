import path from "path"
import { Configuration } from "webpack"
import { merge } from "webpack-merge"

import Common from "./webpack.common.config"

const config: Configuration = merge(Common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    port: 4040,
    static: path.join(__dirname, "build"),
    historyApiFallback: true,
    open: true,
    hot: true,
  },
})

export default config
