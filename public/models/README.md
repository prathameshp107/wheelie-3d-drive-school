
# 3D Car Models

This directory contains the 3D car models used in the DriveLearn application.

## Required Models:

1. **honda-city.glb** - Realistic Honda City sedan model
2. **maruti-swift.glb** - Realistic Maruti Swift hatchback model  
3. **hyundai-creta.glb** - Realistic Hyundai Creta SUV model

## Model Requirements:

- Format: GLTF/GLB (preferred)
- Size: Optimized for web (< 5MB each)
- Materials: Should include car body materials that can be recolored
- Orientation: Models should face forward (positive Z-axis)
- Scale: Appropriate for viewing (roughly 1:1 scale)

## Recommended Sources:

### Free Sources:
- **Sketchfab** (sketchfab.com) - Search for "Honda City", "Swift hatchback", "Creta SUV"
- **Free3D** (free3d.com) - Good collection of free car models
- **Poly Haven** (polyhaven.com) - High-quality free 3D assets
- **CGTrader** - Some free models available

### Instructions to Add Models:

1. Download GLTF/GLB car models from the sources above
2. Rename them to match the filenames above
3. Place them in this `/public/models/` directory
4. The app will automatically load these models instead of the fallback geometric shapes

### Model Optimization Tips:

- Use tools like Blender or online GLTF optimizers to reduce file size
- Compress textures to reasonable resolutions (1024x1024 or 512x512)
- Remove unnecessary details for web performance
- Ensure models have proper materials for color customization

## Fallback System:

If models are not found, the app will automatically fall back to the geometric car shapes until real models are added.
