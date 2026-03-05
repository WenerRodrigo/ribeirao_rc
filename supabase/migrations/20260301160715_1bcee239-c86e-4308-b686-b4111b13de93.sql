
DROP POLICY IF EXISTS "Admins can delete product images storage" ON storage.objects;
CREATE POLICY "Admins can delete product images storage" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'product-images' AND public.has_role(auth.uid(), 'admin'::app_role));
