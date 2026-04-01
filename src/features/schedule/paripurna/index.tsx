import SidebarComponent from "@/components/sidebar";
import TableData from "@/components/table";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ParipurnaFeat = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <SidebarProvider>
        <SidebarComponent />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
            <div className="flex items-center gap-2 px-4">
              <SidebarTrigger className="-ml-1" />
            </div>
          </header>
          <Card>
            <div>
              <Button onClick={() => setOpen(!open)} className="m-2 cu">
                {open ? "See Less" : "Buat Rapat"}
              </Button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open ? "h-auto" : "max-h-0"
                }`}
              >
                <Card className="w-1/2 p-2 m-2">
                  <div className="flex flex-col gap-4">
                    <label className="text-left text-black flex flex-col gap-2">
                      Nama Rapat
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Rapat" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Pilih Rapat</SelectLabel>
                            <SelectItem value="PARIPURNA">PARIPURNA</SelectItem>
                            <SelectItem value="BANGGAR (Badan Anggaran)">
                              BANGGAR (Badan Anggaran)
                            </SelectItem>
                            <SelectItem value="Rapat Mitra (Komisi I)">
                              Rapat Mitra (Komisi I)
                            </SelectItem>
                            <SelectItem value="Rapat Mitra (Komisi II)">
                              Rapat Mitra (Komisi II)
                            </SelectItem>
                            <SelectItem value="Rapat Mitra (Komisi III)">
                              Rapat Mitra (Komisi III)
                            </SelectItem>
                            <SelectItem value="Rapat Mitra (Komisi IV)">
                              Rapat Mitra (Komisi IV)
                            </SelectItem>
                            <SelectItem value="Rapat Komisi I">
                              Rapat Komisi I
                            </SelectItem>
                            <SelectItem value="Rapat Komisi II">
                              Rapat Komisi II
                            </SelectItem>
                            <SelectItem value="Rapat Komisi III">
                              Rapat Komisi III
                            </SelectItem>
                            <SelectItem value="Rapat Komisi IV">
                              Rapat Komisi IV
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </label>

                    <label className=" flex flex-col gap-2 text-left text-black">
                      Deskripsi Rapat
                      <Textarea className="border-solid rounded-lg focus:border-[#FFCB27]" />
                    </label>

                    <label className="flex flex-col gap-2 text-left text-black">
                      Waktu Mulai
                      <Input className="border-solid rounded-lg focus:border-[#FFCB27]" />
                    </label>

                    <label className="flex flex-col gap-2 text-left text-black">
                      Estimasi Waktu Selesai
                      <Input className="border-solid rounded-lg focus:border-[#FFCB27]" />
                    </label>

                    <label className="flex flex-col gap-2 text-left text-black">
                      Tanggal
                      <Input className="border-solid rounded-lg focus:border-[#FFCB27]" />
                    </label>

                    <label className="text-left text-black flex flex-col gap-2">
                      Ruangan
                      <Select>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Pilih Ruangan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Pilih Ruangan</SelectLabel>
                            <SelectItem value="tes ruangan 1">
                              tes ruangan 1
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </label>

                    <label className="flex flex-col gap-2 text-left text-black">
                      <p>
                        File Surat Undangan{" "}
                        <span className="italic">(File .pdf)</span>
                      </p>
                      <Input />
                    </label>
                    <Button
                      type="submit"
                      className="hover:bg-[#f8d667] bg-[#FFCB27]"
                    >
                      Tambah
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
            <TableData/>
          </Card>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default ParipurnaFeat;
