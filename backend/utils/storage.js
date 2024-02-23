import fs from 'fs';
import { join } from "path";
import { stat, mkdir, writeFile } from "fs/promises";
import * as dateFn from "date-fns";
import mime from "mime";

const Store = async (file)=>{
    
  const buffer = Buffer.from(await file.arrayBuffer());
  const uploadFolder = `/uploads/`;
  const uploadDirectory = join(process.cwd(), "/tmp/public", uploadFolder);

  try {
    await stat(uploadDirectory);
  } catch (e) {
    if (e.code === "ENOENT") {
      await mkdir(uploadDirectory, { recursive: true });
    } else {
      console.error(
        "Error while trying to create directory when uploading a file\n",
        e
      );
    }
}
  try{
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${file.name.replace(
            /\.[^/.]+$/,
            ""
        )}-${uniqueSuffix}.${mime.getExtension(file.type)}`;
        await writeFile(`${uploadDirectory}/${filename}`, buffer);
    }
    catch(e){
        console.log("error",e)
    }

    const fileList = fs.readdirSync(uploadDirectory);

    let List = [];
    for (const file of fileList) {
        const name = `${'tmp/public/uploads/'}${file}`
        List.push(name);
    }
    return List;
}

const FlushFiles = async () => {

  const uploadFolder = `/uploads/`;
  const uploadDirectory = join(process.cwd(), "tmp/public", uploadFolder);

  fs.readdir(uploadDirectory, (err, files) => {
    if (err) throw err;
  
    for (const file of files) {
      fs.unlink(join(uploadDirectory, file), (err) => {
        if (err) throw err;
      });
    }
  });

  return;
}

export { Store, FlushFiles};
