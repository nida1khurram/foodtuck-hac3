import { shipEngine } from "@/helper/shipEngine";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { shipToAddress, packages } = await req.json();
  try {
    const shipmentDetails = await shipEngine.getRatesWithShipmentDetails({
      shipment: {
        shipTo: shipToAddress,
        shipFrom: {
          name: "John Doe",
          phone: "+1 555 123 4567",
          addressLine1: "742 Evergreen Terrace",
          addressLine2: "Apt 101",
          cityLocality: "Springfield",
          stateProvince: "IL",
          postalCode: "62701",
          countryCode: "US",
          addressResidentialIndicator: "no",
        },
        packages: packages,
      },
      rateOptions: {
        carrierIds: [
          process.env.SHIPENGINE_DHL || "",
          process.env.SHIPENGINE_FedEx || "",
          process.env.SHIPENGINE_UPS || "",
        ].filter(Boolean),
      },
    });

    return new Response(JSON.stringify(shipmentDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}