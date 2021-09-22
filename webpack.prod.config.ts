import { Configuration } from "webpack"
import { merge } from "webpack-merge"

import Common from "./webpack.common.config"

const config: Configuration = merge(Common, {
  mode: "production",
})

export default config
