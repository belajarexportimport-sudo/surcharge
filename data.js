const SURCHARGE_DATA = {
    "updatedDate": "March 25, 2026",
    "carriers": {
        "dhl": {
            "name": "DHL Express",
            "color": "#FFCC00",
            "textColor": "#D40511",
            "fuelSurcharge": "Variable",
            "surcharges": [
                {
                    "category": "Standard",
                    "name": "Fuel Surcharge",
                    "rate": "Variable %, adjusted monthly based on aviation fuel index.  based on the daily average spot prices for U.S. Gulf Coast (USGC) kerosene-type jet fuel, as reported by the U.S. Department of Energy between third week release of prior month to third week release of actual month"
                },
                {
                    "category": "Admin",
                    "name": "Address Correction",
                    "rate": "IDR 180,700 per shipment."
                },
                {
                    "category": "Standard",
                    "name": "Remote Area / Out of Area",
                    "rate": "IDR 390,000 or IDR 9,500 per kg, if higher"
                },
                {
                    "category": "Standard",
                    "name": "Residential Delivery",
                    "rate": "IDR 95,000 per shipment"
                },
                {
                    "category": "Admin",
                    "name": "Data Entry (DHL) / AWB manual",
                    "rate": "IDR 180,000 / shipment"
                },
                {
                    "category": "Admin",
                    "name": "Direct Signature (DHL)",
                    "rate": "IDR 95,000 / shipment"
                },
                {
                    "category": "Admin",
                    "name": "Adult Signature (DHL)",
                    "rate": "IDR 95,000 / shipment"
                },
                {
                    "category": "Admin",
                    "name": "Change of Billing (DHL) (re-issue inv)",
                    "rate": "IDR 195,500 / shipment"
                },
                {
                    "category": "Admin",
                    "name": "Printed Invoice (DHL) (invoicing hardcopy)",
                    "rate": "IDR 65,000 / shipment"
                },
                {
                    "category": "Other",
                    "name": "Full Dangerous Goods (DHL)",
                    "rate": "IDR 1,900,000 / shipment"
                },
                {
                    "category": "Other",
                    "name": "Excepted Quantities (DHL)",
                    "rate": "IDR 486,500 / shipment"
                },
                {
                    "category": "Other",
                    "name": "Dry Ice UN1845 (DHL)",
                    "rate": "IDR 228,000 / shipment"
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Weight",
                    "rate": "IDR 545,000 (for >30kg actual weight)."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Dimension",
                    "rate": "IDR 545,000 (>120cm on longest side)."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Packaging / Non-Standard",
                    "rate": "IDR 367,500 (non-conveyable or irregular shape)."
                },
                {
                    "category": "Handling",
                    "name": "Oversize / Large Package",
                    "rate": "IDR 1,725,000 (>300cm length + girth)."
                },
                {
                    "category": "Handling",
                    "name": "Over Maximum Limits / Unauthorized package",
                    "rate": "IDR 3,000,000 per piece (>300cm L+G or >70kg)."
                },
                {
                    "category": "Handling",
                    "name": "Overweight Piece (DHL)",
                    "rate": "IDR 1,750,000 / package (> 70kg / collie)"
                },
                {
                    "category": "Handling",
                    "name": "Oversize Piece (DHL)",
                    "rate": "IDR 367,500 / package (> 100 x 80 cm x \u2026. )"
                },
                {
                    "category": "Handling",
                    "name": "Non Stackable",
                    "rate": "IDR 5,150,000 / pallet (> 25kg only)"
                },
                {
                    "category": "Special",
                    "name": "Dangerous Goods / Lithium Battery / Dry Ice",
                    "rate": "IDR 1,375,000 (DG), IDR 500,000 (Lithium), IDR 90,000 (Dry Ice)."
                },
                {
                    "category": "Standard",
                    "name": "Demand / Peak Season Surcharge",
                    "rate": "suspended"
                },
                {
                    "category": "Customs",
                    "name": "Duty/Tax Advancement / Processing Fee",
                    "rate": "2% of advanced duty/tax (min IDR 195,000)."
                },
                {
                    "category": "Special",
                    "name": "Saturday Delivery / Pickup",
                    "rate": "IDR 275,000 per shipment."
                },
                {
                    "category": "Admin",
                    "name": "PEB Single",
                    "rate": "150,000 per shipment"
                },
                {
                    "category": "Customs",
                    "name": "Disbursment Fee",
                    "rate": "IDR 190,000 or 2.5% of fiscal charges, if higher"
                },
                {
                    "category": "Customs",
                    "name": "Advanced Payment (Import Duties and Taxes for Non-Account receivers)",
                    "rate": "IDR 160,000 or 2.5% of fiscal charges, if higher"
                },
                {
                    "category": "Customs",
                    "name": "Duty Tax Paid",
                    "rate": "2% of fiscal charges with minimum of IDR 290,000"
                },
                {
                    "category": "Customs",
                    "name": "Clearance processing",
                    "rate": "IDR 163,000 per shipment"
                },
                {
                    "category": "Customs",
                    "name": "Bonded Storage",
                    "rate": "IDR 5,300 per shipment and IDR 2,650 per kg  (both per day after three calendar days)"
                },
                {
                    "category": "Customs",
                    "name": "Non-Routine Entry",
                    "rate": "IDR 165,000 per shipment"
                },
                {
                    "category": "Customs",
                    "name": "Broker Notification",
                    "rate": "IDR 350,000 per shipment"
                },
                {
                    "category": "Special",
                    "name": "Standard Liability",
                    "rate": "26 Special Drawing Rights per kilogram (approximately $US 35.00 per kilogram)  https://mydhl.express.dhl/id/en/legal/terms-and-conditions.html"
                },
                {
                    "category": "Special",
                    "name": "insurance",
                    "rate": "1.Goods = Outbound: IDR 190,000 or 2% of the shipment value, if higher Inbound: IDR 190,000 or 1% of the shipment value, if higher  2. doc = IDR 86,000 / shipment"
                },
                {
                    "category": "Customs",
                    "name": "DDP",
                    "rate": "IDR 320,000 or 2% of fiscal charges, if higher"
                },
                {
                    "category": "Special",
                    "name": "Saturday Delivery",
                    "rate": "IDR 652,000 / shipment"
                }
            ]
        },
        "fedex": {
            "name": "FedEx",
            "color": "#4D148C",
            "textColor": "#FFFFFF",
            "fuelSurcharge": "Variable",
            "surcharges": [
                {
                    "category": "Standard",
                    "name": "Fuel Surcharge",
                    "rate": "Adjusted weekly (US Gulf Coast Jet Fuel Index)."
                },
                {
                    "category": "Admin",
                    "name": "Address Correction",
                    "rate": "IDR 187,000 per shipment."
                },
                {
                    "category": "Standard",
                    "name": "Remote Area / Out of Area",
                    "rate": "OPA  Tier A not applicable Tier B IDR 6,000 / kg, min 339,000 / shipment Tier C IDR 8,000 / kg, min 442,000 / shipment  ODA Tier A: IDR 52,000 per shipment Tier B: IDR 6,000 / kg, min IDR 339,000 / shipment Tier C: IDR 8,000 / kg, min IDR 442,000 / shipment"
                },
                {
                    "category": "Standard",
                    "name": "Residential Delivery",
                    "rate": "IDR 55,000 (non-freight) / IDR 1,772,000 (freight, US & Canada).  If the ODA Surcharge is applied to a shipment, the Residential Delivery Surcharge will not apply"
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Weight",
                    "rate": "IDR 431,000 per package (>25kg)."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Dimension",
                    "rate": "IDR 431,000 , min CWT 18 kg >121cm longest side or >76cm second side Length + Girth = 266 cm"
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Packaging / Non-Standard",
                    "rate": "IDR 431,000 , min CWT 18 kg  non-cardboard, cylindrical, strapped, or wrapped."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling Freight",
                    "rate": "IDR 2,944,000 per freight handling unit.  157 centimeters along its longest side"
                },
                {
                    "category": "Handling",
                    "name": "Oversize / Large Package",
                    "rate": "IDR 1,072,000 , min CWT 18 kg >243cm length or >330cm length+girth). > 50kg in actual weight; cubic volume (Length x Width x Height) greater than 283,168 cubic centimeters"
                },
                {
                    "category": "Handling",
                    "name": "Over Maximum Limits / Unauthorized package",
                    "rate": "IDR 4,447,000 per package (>68kg or >419cm L+G). Or Length > 274"
                },
                {
                    "category": "Handling",
                    "name": "Unauthorized freight Charge (FedEx)",
                    "rate": "IDR 7,306,000 per freight handling unit. > 302 cm (should rejected and switch to IPF/IEF, but if accepted will be charge) Girth + Length = > 762 cm actual weight > 1,995kg"
                },
                {
                    "category": "Handling",
                    "name": "Non Stackable",
                    "rate": "IDR 3,700,000 per freight handling unit"
                },
                {
                    "category": "Special",
                    "name": "Dangerous Goods / Lithium Battery / Dry Ice",
                    "rate": "IDR 1,890,000 (Accessible DG), IDR 885,000 (Inaccessible DG), IDR 82,000 (Dry Ice)."
                },
                {
                    "category": "Standard",
                    "name": "Demand / Peak Season Surcharge",
                    "rate": "May apply during high-volume times."
                },
                {
                    "category": "Customs",
                    "name": "Duty/Tax Advancement / Processing Fee",
                    "rate": "Varies; surcharge applies when FedEx pays on behalf."
                },
                {
                    "category": "Special",
                    "name": "Saturday Delivery / Pickup",
                    "rate": "IDR 250,000 per shipment."
                },
                {
                    "category": "Customs",
                    "name": "IPF (International Processing Fee) (UPS) / U.S. Inbound Processing Fee (FDX)",
                    "rate": "IDR 44,000 per shipment. A charge will be assessed on all international shipments imported into the U.S"
                },
                {
                    "category": "Admin",
                    "name": "Adult Signature",
                    "rate": "IDR 75,000 per non-freight shipment"
                },
                {
                    "category": "Customs",
                    "name": "Disbursment Fee",
                    "rate": "duty tax < 15,000 = free of charge 15,000 - 250,000 =  IDR 50,000 > 250,000 = IDR 150,000"
                },
                {
                    "category": "Customs",
                    "name": "Clearance processing",
                    "rate": "duty tax < 15,000 = free of charge 15,000 - 250,000 = free of charge > 250,000 = IDR50,000"
                },
                {
                    "category": "Customs",
                    "name": "FedEx International Broker Select",
                    "rate": "IDR 19,000 / kg, min IDR 163,000 per Awb"
                },
                {
                    "category": "Admin",
                    "name": "Manual Document Handling Fee",
                    "rate": "IDR 70,000 per Air Waybill"
                },
                {
                    "category": "Admin",
                    "name": "Paper Invoice Fee",
                    "rate": "IDR 50,000 per freight or duty invoice"
                },
                {
                    "category": "Admin",
                    "name": "Billing Change Fee",
                    "rate": "IDR 150,000 per revised or rebilled invoice"
                }
            ]
        },
        "ups": {
            "name": "UPS",
            "color": "#351C15",
            "textColor": "#FFB500",
            "fuelSurcharge": "Variable",
            "surcharges": [
                {
                    "category": "Standard",
                    "name": "Fuel Surcharge",
                    "rate": "Adjusted weekly, applies to transportation & some surcharges."
                },
                {
                    "category": "Admin",
                    "name": "Address Correction",
                    "rate": "IDR 187,072 per collie or maximum 653,420 per AWB"
                },
                {
                    "category": "Standard",
                    "name": "Remote Area / Out of Area",
                    "rate": "Extended: IDR 429,792 or IDR 8,288/kg; Remote: IDR 479,964 or IDR 9,472 per kg"
                },
                {
                    "category": "Standard",
                    "name": "Residential Delivery",
                    "rate": "IDR 56,684 per shipment."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Weight",
                    "rate": "IDR 280,016 per package (>25kg)."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Dimension",
                    "rate": "IDR 280,016 (>122cm longest side or >76cm second side)."
                },
                {
                    "category": "Handling",
                    "name": "Additional Handling \u2013 Packaging / Non-Standard",
                    "rate": "IDR 280,016 (non-standard packaging or cylindrical)."
                },
                {
                    "category": "Handling",
                    "name": "Oversize / Large Package",
                    "rate": "IDR 1,058,200 (>300cm length+girth, min billable 40kg)."
                },
                {
                    "category": "Handling",
                    "name": "Over Maximum Limits / Unauthorized package",
                    "rate": "IDR 4,121,800 per package (>400cm L+G or >70kg or Length > 274 cm)."
                },
                {
                    "category": "Special",
                    "name": "Dangerous Goods / Lithium Battery / Dry Ice",
                    "rate": "IDR 4,440,000 (DG/Prohibited Item), IDR 78,000 (Dry Ice)."
                },
                {
                    "category": "Standard",
                    "name": "Demand / Peak Season Surcharge",
                    "rate": "Seasonal or capacity-based surcharges may apply."
                },
                {
                    "category": "Customs",
                    "name": "Duty/Tax Advancement / Processing Fee",
                    "rate": "5.9% of duty/tax advanced (min IDR 89,590)."
                },
                {
                    "category": "Special",
                    "name": "Saturday Delivery / Pickup",
                    "rate": "IDR 240,000 per shipment."
                },
                {
                    "category": "Customs",
                    "name": "IPF (International Processing Fee) (UPS) / U.S. Inbound Processing Fee (FDX)",
                    "rate": "IDR 37,000 / AWB"
                },
                {
                    "category": "Admin",
                    "name": "Adult Signature",
                    "rate": "IDR 71,040 per AWB"
                },
                {
                    "category": "Customs",
                    "name": "Disbursment Fee",
                    "rate": "5,9% duty or min 94,159"
                },
                {
                    "category": "Customs",
                    "name": "Clearance processing",
                    "rate": "2,5% duty or min 200,000"
                },
                {
                    "category": "Customs",
                    "name": "Bonded Storage",
                    "rate": "IDR 2870/day/kg"
                },
                {
                    "category": "Special",
                    "name": "insurance",
                    "rate": "For each shipment over IDR1,480,000, you may purchase additional coverage against loss or damage at IDR32,710 for each additional IDR1,480,000 or fraction thereof."
                }
            ]
        }
    }
};