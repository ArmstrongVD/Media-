import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import React from "react";
import { GoTrashcan } from "react-icons/go";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button className="mr-2" loading={results.isLoading} onClick={handleRemoveAlbum}>
        <GoTrashcan />
      </Button>
      {album.title};
    </>
  );

  return (
    <ExpandablePanel key={album.id} header={header}>
     <PhotosList album={album}/>
    </ExpandablePanel>
  );
}

export default AlbumListItem;
