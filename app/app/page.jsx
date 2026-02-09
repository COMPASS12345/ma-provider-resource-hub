import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

// 👉 HOW TO EDIT THIS SITE
// 1) Scroll to the COUNTY_DATA below
// 2) Add or edit resources directly in the array
// 3) Save and redeploy — no coding knowledge needed beyond copy/paste

const COUNTY_DATA = {
  "Suffolk County": [
    {
      name: "Community Mental Health Center",
      type: "Outpatient Therapy",
      description: "Trauma-informed outpatient services for youth and adults",
      phone: "(617) 555-1234",
      website: "https://example.com"
    }
  ],
  "Middlesex County": [],
  "Essex County": [],
  "Worcester County": [],
  "Norfolk County": [],
  "Bristol County": [],
  "Plymouth County": [],
  "Barnstable County": [],
  "Hampden County": [],
  "Hampshire County": [],
  "Berkshire County": [],
  "Franklin County": [],
  "Dukes County": [],
  "Nantucket County": []
};

export default function ResourceHub() {
  const [search, setSearch] = useState("");
  const counties = Object.keys(COUNTY_DATA);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <header className="max-w-5xl mx-auto mb-10 text-center">
        <h1 className="text-3xl font-bold mb-3">Massachusetts Provider Resource Hub</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          A warm, easy-to-use referral and resource guide organized by county for providers across Massachusetts.
        </p>
      </header>

      <div className="max-w-xl mx-auto mb-8 flex gap-2">
        <Input
          placeholder="Search by county or service type"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button variant="outline"><Search size={18} /></Button>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {counties
          .filter((county) => county.toLowerCase().includes(search.toLowerCase()))
          .map((county) => (
            <Card key={county} className="rounded-2xl shadow-sm">
              <CardContent className="p-5">
                <h2 className="text-xl font-semibold mb-3">{county}</h2>

                {COUNTY_DATA[county].length === 0 ? (
                  <p className="text-sm text-slate-500">No resources added yet.</p>
                ) : (
                  <ul className="space-y-3">
                    {COUNTY_DATA[county].map((resource, index) => (
                      <li key={index} className="border rounded-xl p-3 bg-white">
                        <p className="font-medium">{resource.name}</p>
                        <p className="text-sm text-slate-600">{resource.type}</p>
                        <p className="text-sm mt-1">{resource.description}</p>
                        <div className="text-sm mt-2 space-y-1">
                          <p>{resource.phone}</p>
                          <a
                            href={resource.website}
                            className="text-blue-600 hover:underline"
                            target="_blank"
                          >
                            Visit Website
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          ))}
      </div>

      <footer className="mt-16 text-center text-sm text-slate-500">
        Built to support providers and communities across Massachusetts.
      </footer>
    </div>
  );
}
