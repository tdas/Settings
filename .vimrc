set nocompatible

" Vundle
filetype off
set rtp+=~/.vim/bundle/vundle/
call vundle#rc()

Bundle 'SuperTab-continued.'

filetype plugin indent on


" Formatting
set tabstop=2
set shiftwidth=2
set autoindent
set smartindent
set nowrap
syntax on

" Navigation
set number 
set mouse=a
set ruler
set ww=<,>,h,l        " wraps the cursor to next/previous line
set showcmd
set showmode

" Commands system 
set wildmenu
set wildmode=list:longest
set ignorecase 
set smartcase         " both case cmds together ensure case-sensitivity only in the presence of uppercase
set gdefault 					" make substitution always global (s/ / /g)
set incsearch
set showmatch
set hlsearch          " search cmds together make searching pretty

" Key maps
nnoremap <leader><space> :noh<cr> 	" turn off search highlights
nnoremap ; :
"nnoremap i a
