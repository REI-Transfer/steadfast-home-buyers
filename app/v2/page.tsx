import HomebuyerLanding from "@/components/v2/HomebuyerLanding"
import config from "@/lib/config"

export default function V2Page() {
  let parsedServiceAreas: Array<{ id: string; centerLat: number; centerLng: number; radiusMiles: number }> = []
  try {
    parsedServiceAreas = JSON.parse(config.serviceAreas)
  } catch {}

  const supportEmail = process.env.SUPPORT_EMAIL || "matt@steadfasthomebuyers.com"

  return (
    <HomebuyerLanding
      companyName={config.companyName}
      phoneDisplay={config.phoneDisplay}
      phoneHref={config.phoneHref}
      marketName={config.marketName || "West Tennessee"}
      supportEmail={supportEmail}
      serviceAreas={parsedServiceAreas}
    />
  )
}
