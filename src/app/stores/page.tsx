"use client";

import { MapPin, Store } from "lucide-react";
import { useState } from "react";

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.732694029679!2d106.62875777480457!3d10.755072589392416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752d2034367bfd%3A0x57c32c921c2226f2!2zQ2jEg24gR2EgR-G7kWkgSHV5IE3GsOG7nWkgLSBDaOG7oyBQaMO6IEzDom0!5e0!3m2!1svi!2s!4v1793355839530!5m2!1svi!2s";

export default function StoresPage() {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const hasSelectedStore = city === "ho-chi-minh" && district === "quan-6";

  return (
    <main className="bg-background px-4 py-10 text-foreground sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto w-full lg:w-3/4">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            HM Store
          </p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Hệ thống cửa hàng
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Chọn khu vực để xem địa chỉ cửa hàng và hướng dẫn đường đi.
          </p>
        </div>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card lg:grid-cols-12">
          <section
            className="p-5 sm:p-7 lg:col-span-4 lg:p-8"
            aria-labelledby="store-search-heading"
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Store className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h2 id="store-search-heading" className="text-xl font-bold">
                  Tìm cửa hàng
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  Chọn lần lượt tỉnh thành và quận huyện.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <label htmlFor="city" className="text-sm font-semibold">
                  Tỉnh / Thành phố
                </label>
                <select
                  id="city"
                  value={city}
                  onChange={(event) => {
                    setCity(event.target.value);
                    setDistrict("");
                  }}
                  className="h-12 w-full cursor-pointer rounded-lg border border-input bg-background px-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Chọn tỉnh / thành phố</option>
                  <option value="ho-chi-minh">TP. Hồ Chí Minh</option>
                </select>
              </div>

              {city === "ho-chi-minh" && (
                <div className="space-y-2">
                  <label htmlFor="district" className="text-sm font-semibold">
                    Quận / Huyện
                  </label>
                  <select
                    id="district"
                    value={district}
                    onChange={(event) => setDistrict(event.target.value)}
                    className="h-12 w-full cursor-pointer rounded-lg border border-input bg-background px-3 text-base outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Chọn quận / huyện</option>
                    <option value="quan-6">Quận 6</option>
                  </select>
                </div>
              )}
            </div>

            {hasSelectedStore ? (
              <div
                className="mt-8 border-t border-border pt-6"
                aria-live="polite"
              >
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold leading-6">
                      Chăn Ga Gối Huy Mười – Chợ Phú Lâm
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base">
                      Mặt tiền Chợ Phú Lâm, đường Bà Hom, Quận 6, TP. Hồ Chí
                      Minh
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <p className="mt-8 border-t border-border pt-6 text-sm leading-6 text-muted-foreground">
                Thông tin cửa hàng sẽ hiển thị sau khi bạn chọn Quận 6.
              </p>
            )}
          </section>

          <section className="min-h-[360px] border-t border-border bg-muted/30 lg:col-span-8 lg:min-h-[540px] lg:border-l lg:border-t-0">
            {hasSelectedStore ? (
              <iframe
                src={MAP_EMBED_URL}
                title="Bản đồ cửa hàng Chăn Ga Gối Huy Mười tại Chợ Phú Lâm"
                className="h-[420px] w-full border-0 lg:h-full lg:min-h-[540px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : (
              <div className="flex h-full min-h-[360px] items-center justify-center p-8 text-center lg:min-h-[540px]">
                <div className="max-w-xs">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full border border-border bg-background text-muted-foreground">
                    <MapPin className="size-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-4 text-lg font-semibold">
                    Bản đồ cửa hàng
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    Vị trí trên Google Maps sẽ xuất hiện sau khi bạn hoàn tất
                    lựa chọn khu vực.
                  </p>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </main>
  );
}
