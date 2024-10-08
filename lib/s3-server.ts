import AWS from 'aws-sdk'
import fs from 'fs'

export async function downloadFromS3(file_key:string){
   try{
    AWS.config.update({
        accessKeyId:process.env.NEXT_PUBLIC_S3_ACCESS_KEY_ID,
        secretAccessKey:process.env.NEXT_PUBLIC_S3__SECRET_ACCESS_KEY,
    })

    const s3=new AWS.S3({
        params:{
            Bucket:'dct4life-files',
        },
        region:'af-south-1'
    })
    const params={
        Bucket:process.env.NEXT_PUBLIC_S3__BUCKET_NAME!,
        Key:file_key
    }

    const obj=await s3.getObject(params).promise()

    const file_name=`/tmp/pdf-${Date.now()}.pdf`
    fs.writeFileSync(file_name,obj.Body as Buffer)
    return file_name
   } catch(error){
    console.log(error)
   }
}