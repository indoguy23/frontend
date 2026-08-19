import { useState } from "react";

import AddressSelector from "@/components/common/AddressSelector";
import { showToast } from "@/components/ui/Toast";

import { ADDRESS_DATA } from "../data/address.data";
import AddressCard from "@/components/common/Address/AddressCard";

const AddressPlayground = () => {
  const [selectedAddressId, setSelectedAddressId] = useState(
    ADDRESS_DATA[0]?.id ?? "",
  );

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <h2 className="text-2xl font-semibold text-card-foreground">
          Address Components
        </h2>

        <p className="mt-2 text-muted-foreground">
          Reusable address cards and delivery address selection.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-semibold text-foreground">Address Card</h3>

        <div className="mt-4 max-w-xl">
          {ADDRESS_DATA[0] && (
            <AddressCard
              address={ADDRESS_DATA[0]}
              onEdit={(address) =>
                showToast.info(`Editing ${address.fullName}'s address.`)
              }
              onDelete={(address) =>
                showToast.info(
                  `Delete requested for ${address.fullName}'s address.`,
                )
              }
            />
          )}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="font-semibold text-foreground">Address Selector</h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Select the address that should be used for delivery.
        </p>

        <div className="mt-5">
          <AddressSelector
            addresses={ADDRESS_DATA}
            value={selectedAddressId}
            onChange={setSelectedAddressId}
            onEdit={(address) =>
              showToast.info(`Editing ${address.fullName}'s address.`)
            }
            onDelete={(address) =>
              showToast.info(
                `Delete requested for ${address.fullName}'s address.`,
              )
            }
            onAddNew={() => showToast.info("Add new address requested.")}
          />
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          Selected address:{" "}
          <strong className="text-foreground">{selectedAddressId}</strong>
        </p>
      </div>
    </section>
  );
};

export default AddressPlayground;
