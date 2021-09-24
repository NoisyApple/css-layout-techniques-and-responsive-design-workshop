import { useEffect, useState } from "react"

const useFeatureFlag = (featureFlagId: string): boolean => {
  const [isFeatureFlagOn, setIsFeatureFlagOn] = useState(false)

  useEffect(() => {
    fetch(
      `https://feature-flagging-b8561-default-rtdb.firebaseio.com/${featureFlagId}.json`
    )
      .then((r) => r.json())
      .then((d) => setIsFeatureFlagOn(d))
      .catch((e) => {
        console.error(
          `Error while trying to fetch Feature Flag with id: ${featureFlagId}`,
          e
        )
      })
  }, [])

  return isFeatureFlagOn
}

export default useFeatureFlag
