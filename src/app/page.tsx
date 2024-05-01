import Image from "next/image";
import styles from "./page.module.css";
import AppBar from "@/components/AppBar";
import { Grid } from "@chakra-ui/react";
import MilletCard from "@/components/MilletCard";
import Models from "@/components/Models";

export default function Home() {
  return(
    <div>
      <Models />
    </div>
  )
}
